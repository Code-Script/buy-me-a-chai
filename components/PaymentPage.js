"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { initiate } from "@/actions/useractions";
import { useSession } from "next-auth/react";
import { fetchuser, fetchpayments } from "@/actions/useractions";
import { ToastContainer, Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { formatDynamicAPIAccesses } from "next/dist/server/app-render/dynamic-rendering";
import Image from "next/image";

const PaymentPage = ({ username }) => {
    // const { data: session } = useSession()

    const [paymentform, setpaymentform] = useState({ name: "", message: "", amount: "" })
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setpayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") === "true") {
            toast('Thank you for your donation', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        router.push(`/${username}`)
    }, [])



    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setpayments(dbpayments)
    }


    const pay = async (amount) => {
        // Get the order Id
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id;
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Buy Me a Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />

            {/* <button id="rzp-button1">Pay</button> */}
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className='cover w-full relative'>
                <Image className='object-cover w-full h-[150px] md:h-[380px]' src={currentUser.coverpic || "/default-cover.jpg"} width={1920} height={150} alt="" />

                <div className='absolute -bottom-15 right-[35%] md:right-[46%]'>
                    <Image className='rounded-lg border' width={110} height={110} src={currentUser.profilepic|| "/default-profile.jpg"} alt="" />
                </div>
            </div>

            <div className='info flex flex-col items-center justify-center gap-2 my-20'>
                <div className='font-bold text-4xl'>
                    {currentUser.name}
                </div>
                <div>
                    Creating NOX
                </div>
                <div className='text-gray-400'>
                    946 paid members • 152 posts
                </div>

                <div className='payment flex gap-3 w-[90%] md:w-[80%] mt-10 flex-col md:flex-row'>
                    <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg p-7">
                        {/* list of all supporters */}
                        <h2 className='font-bold text-2xl mb-4'>Top Supporters</h2>
                        <ul className='mx-5 text-lg'>
                            {payments.length === 0 && <li className='text-gray-400'>No payments yet</li>}
                            {payments.map((p, i) => {
                                return (
                                    <li key={i} className='my-3 flex items-center gap-2'>
                                        <Image className='rounded-full' width={28} height={28} src="/avatar2.gif" alt="" />
                                        <span>{p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message &quot;{p.message}&quot;</span>
                                    </li>
                                    // <li key={i} className='my-3 flex items-center gap-2'>
                                    //     <Image className='rounded-full' width={28} src="avatar2.gif" alt="" />
                                    //     <span>user donated <span className='font-bold'>₹34</span> with a message "support from me"</span>
                                    // </li>
                                )
                            })}



                        </ul>
                    </div>
                    <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg p-7">
                        <h2 className='font-bold text-2xl mb-4'>Make a Payment</h2>
                        <div className='flex gap-2 flex-col '>
                            {/* input for name and message */}
                            <input onChange={handleChange} value={paymentform.name} name="name" type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            <input onChange={handleChange} value={paymentform.message} name="message" type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input onChange={handleChange} value={paymentform.amount} name="amount" type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' inputMode="numeric" />

                            <button onClick={() => { pay(Number.parseInt(paymentform.amount) * 100) }} type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 disabled:from-cyan-200 disabled:to-blue-200 " disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1} >Pay</button>
                        </div>
                        {/* or choose from these amounts */}
                        <div className='flex gap-2 mt-4 '>
                            <button onClick={() => { pay(1000) }} type="button" className="w-20 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">₹10</button>
                            <button onClick={() => { pay(5000) }} type="button" className="w-20 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">₹50</button>
                            <button onClick={() => { pay(10000) }} type="button" className="w-20 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">₹100</button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PaymentPage;
