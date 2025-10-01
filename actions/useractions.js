"use server";

import Razorpay from "razorpay";
import connectDb from "@/db/connectDb";
import Payment from "@/models/Payment";
import User from "@/models/User";

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb();
    // fetch the secret of the user who is getting the payment
    let user = await User.findOne({ username: to_username })
    const secret = user.razorpaysecret
    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    // create a payment object which shows payment in the database
    await Payment.create({ o_id: x.id, amount: amount / 100, to_user: to_username, name: paymentform.name, message: paymentform.message })

    return x;
}

export const fetchuser = async (username) => {
    await connectDb();
    // let u = await User.findOne({ username: username })
    // let user = u.toObject({ flattenObjectIds: true })
    // return user;
    const u = await User.findOne({ username }).lean();
    if (!u) return null;
    // convert mongodb types to plain JSON-safe values
    u._id = String(u._id);
    if (u.createdAt) u.createdAt = u.createdAt.toISOString();
    if (u.updatedAt) u.updatedAt = u.updatedAt.toISOString();
    return u;
}


export const fetchpayments = async (username) => {
    await connectDb();
    // find all payments sorted by decreasing order of amount and flatten object ids
    let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean();
    p= p.map(item =>({
        ...item,
        _id: String(item._id),
        createdAt: item.createdAt ? item.createdAt.toISOString() : null,
        updatedAt: item.updatedAt ? item.updatedAt.toISOString() : null
        }))
    return p;
}

export const updateProfile = async (data, oldusername) => {
    await connectDb();
    let ndata = Object.fromEntries(data)

    // if the username is being updated, check if username is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists." };
        }
        await User.updateOne({ email: ndata.email }, ndata)
        // Now update all the usernames in the Payments table
        await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })
    }
    await User.updateOne({ email: ndata.email }, ndata);
}