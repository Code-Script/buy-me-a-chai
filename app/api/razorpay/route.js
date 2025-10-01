import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

export const POST = async (req) =>{
    await connectDb()
    let body = await req.formData()
    body = Object.fromEntries(body)

    // check if razorpayOrderId is present on the server 
    let p = await Payment.findOne({o_id: body.razorpay_order_id})
    if(!p){
        return NextResponse.json({success: false, message: "Order Id not found"}, {status: 404})
    }

    // fetch the secret of the user who is getting the payment
    let user = await User.findOne({username: p.to_user})
    if(!user || !user.razorpaysecret){
        return NextResponse.json({ success:false, message: "Razorpay secret for payee not found" }, { status: 500 })
    }
    const secret = user.razorpaysecret

    // verify the payment
    let verified =false
    try{
        verified = validatePaymentVerification(
            { order_id: body.razorpay_order_id, payment_id: body.razorpay_payment_id }, body.razorpay_signature, secret)
    }catch(err){
        return NextResponse.json({ success:false, message: "Verification error", error: err?.message || String(err) }, { status: 400 })
    }
    

    if(verified){
        // mark payment done and store payment id
        const updatedPayment = await Payment.findOneAndUpdate({o_id: body.razorpay_order_id}, {done: true, razorpay_payment_id: body.razorpay_payment_id}, {new: true})
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`)
    }
    else{
        return NextResponse.json({success: false, message: "Payment Verification Failed"}, {status: 400})
    }
}