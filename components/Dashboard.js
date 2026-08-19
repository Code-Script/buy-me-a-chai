"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { fetchuser, fetchpayments, updateProfile } from '@/actions/useractions'
import { get } from 'mongoose'
import { ToastContainer, Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
    const { data: session, update } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})
    const inputClass = 'block w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white shadow-inner shadow-slate-950/20 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-4 focus:ring-cyan-400/15'

    useEffect(() => {
        if (!session) {
            router.push('/login')
        } else {
            getData()
        }
    }, [router, session])

    const getData = async () => {
        let u = await fetchuser(session.user.name)
        setform(u)
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        let a = await updateProfile(e, session.user.name)
        toast('Profile Updated', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });

    }

    return (<>

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

        <div className='container mx-auto max-w-4xl px-5 py-12 md:py-16'>
            <div className="mb-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Creator settings</p>
                <h1 className='mt-3 text-3xl font-black md:text-4xl'>Welcome to Dashboard</h1>
                <p className="mt-3 text-sm text-slate-300">Update your profile and payment details in one place.</p>
            </div>

            <form className='mx-auto max-w-2xl rounded-3xl border border-white/10 bg-slate-950/30 p-6 shadow-2xl shadow-slate-950/25 backdrop-blur-md md:p-9' action={handleSubmit}>
                {/* input for name */}
                <div className='my-2'>
                    <label htmlFor="name" className='mb-2 block text-sm font-semibold text-slate-100'>Name</label>
                    <input value={form.name ? form.name : ""} onChange={handleChange} type="text" name="name" id="name" className={inputClass} />
                </div>
                {/* input for email */}
                <div className='my-2'>
                    <label htmlFor="email" className='mb-2 block text-sm font-semibold text-slate-100'>Email</label>
                    <input value={form.email ? form.email : ""} onChange={handleChange} type="text" name="email" id="email" className={inputClass} />
                </div>
                {/* input for username */}
                <div className='my-2'>
                    <label htmlFor="username" className='mb-2 block text-sm font-semibold text-slate-100'>Username</label>
                    <input value={form.username ? form.username : ""} onChange={handleChange} type="text" name="username" id="username" className={inputClass} />
                </div>
                {/* input for profile picture of input type text */}
                <div className='my-2'>
                    <label htmlFor="profilepic" className='mb-2 block text-sm font-semibold text-slate-100'>Profile Picture</label>
                    <input value={form.profilepic ? form.profilepic : ""} onChange={handleChange} type="text" name="profilepic" id="profilepic" className={inputClass} />
                </div>
                {/* input for cover pic */}
                <div className='my-2'>
                    <label htmlFor="coverpic" className='mb-2 block text-sm font-semibold text-slate-100'>Cover Picture</label>
                    <input value={form.coverpic ? form.coverpic : ""} onChange={handleChange} type="text" name="coverpic" id="coverpic" className={inputClass} />
                </div>
                {/* input for razorpay id */}
                <div className='my-2'>
                    <label htmlFor="razorpayid" className='mb-2 block text-sm font-semibold text-slate-100'>Razorpay ID</label>
                    <input value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} type="text" name="razorpayid" id="razorpayid" className={inputClass} />
                </div>

                {/* input for razorpay secret */}
                <div className='my-2'>
                    <label htmlFor="razorpaysecret" className='mb-2 block text-sm font-semibold text-slate-100'>Razorpay Secret</label>
                    <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} type="text" name="razorpaysecret" id="razorpaysecret" className={inputClass} />
                </div>

                {/* submit button */}
                <div className='my-6'>
                    <button type='submit' className='block w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-3 text-sm font-semibold text-white shadow-lg shadow-cyan-950/35 transition hover:-translate-y-0.5 hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-cyan-300' >Save</button>
                </div>

            </form>

        </div>
    </>)
}

export default Dashboard
