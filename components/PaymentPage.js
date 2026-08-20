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
                theme: "dark",
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


            <div className='cover relative z-10 w-full overflow-visible border-b border-cyan-200/10'>
                <Image className='h-[190px] w-full object-cover brightness-75 md:h-[380px]' src={currentUser.coverpic || "/default-cover.jpg"} width={1920} height={150} alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-slate-950/20"></div>

                <div className='absolute -bottom-14 left-1/2 z-[9999] -translate-x-1/2'>
                    <Image className='rounded-2xl border-4 border-[#0b1220] shadow-xl shadow-slate-950/50' width={112} height={112} src={currentUser.profilepic|| "/default-profile.jpg"} alt="" />
                </div>
            </div>

            <div className='info mx-auto my-20 flex max-w-6xl flex-col items-center justify-center gap-2 px-5'>
                <div className='text-center text-3xl font-black tracking-tight md:text-4xl'>
                    {currentUser.name}
                </div>
                <div className='text-center text-slate-200'>
                    Developing innovative websites
                </div>
                <div className='text-sm text-slate-400'>
                    946 paid members • 152 posts
                </div>

                <div className='payment mt-10 flex w-full flex-col gap-5 md:flex-row'>
                    <div className="supporters w-full rounded-2xl border border-white/10 bg-slate-950/40 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-sm md:w-1/2 md:p-7">
                        {/* list of all supporters */}
                        <h2 className='mb-5 text-2xl font-bold'>Top Supporters</h2>
                        <ul className='space-y-3 text-sm md:text-base'>
                            {payments.length === 0 && <li className='rounded-xl border border-dashed border-white/10 px-4 py-5 text-center text-slate-400'>No payments yet</li>}
                            {payments.map((p, i) => {
                                return (
                                    <li key={i} className='flex items-center gap-3 rounded-xl bg-white/5 p-3'>
                                        <Image className='rounded-full ring-2 ring-cyan-300/20' width={28} height={28} src="/avatar2.gif" alt="" />
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
                    <div className="makePayment w-full rounded-2xl border border-white/10 bg-slate-950/40 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-sm md:w-1/2 md:p-7">
                        <h2 className='mb-5 text-2xl font-bold'>Make a Payment</h2>
                        <div className='flex flex-col gap-3'>
                            {/* input for name and message */}
                            <input onChange={handleChange} value={paymentform.name} name="name" type="text" className='w-full rounded-xl border border-white/10 bg-slate-900/70 p-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-4 focus:ring-cyan-400/15' placeholder='Enter Name' />
                            <input onChange={handleChange} value={paymentform.message} name="message" type="text" className='w-full rounded-xl border border-white/10 bg-slate-900/70 p-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-4 focus:ring-cyan-400/15' placeholder='Enter Message' />
                            <input onChange={handleChange} value={paymentform.amount} name="amount" type="text" className='w-full rounded-xl border border-white/10 bg-slate-900/70 p-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-4 focus:ring-cyan-400/15' placeholder='Enter Amount' inputMode="numeric" />

                            <button onClick={() => { pay(Number.parseInt(paymentform.amount) * 100) }} type="button" className="mb-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-950/30 transition hover:-translate-y-0.5 hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-cyan-300 disabled:cursor-not-allowed disabled:from-cyan-800 disabled:to-blue-900 disabled:opacity-60" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1} >Pay</button>
                        </div>
                        {/* or choose from these amounts */}
                        <div className='mt-4 flex flex-wrap gap-2'>
                            <button onClick={() => { pay(1000) }} type="button" className="w-20 text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">₹10</button>
                            <button onClick={() => { pay(5000) }} type="button" className="w-20 text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">₹50</button>
                            <button onClick={() => { pay(10000) }} type="button" className="w-20 text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">₹100</button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PaymentPage;
