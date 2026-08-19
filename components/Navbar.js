"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {

  const [showdropdown, setShowdropdown] = useState(false)

  const { data: session } = useSession()
  // if (session) {
  //   return <>
  //     Signed in as {session.user.email} <br />
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }

  return (
    <nav className='relative z-50 flex flex-col items-center justify-between border-b border-cyan-200/10 bg-[#0b1220]/95 px-5 py-2 text-white shadow-lg shadow-slate-950/20 backdrop-blur-md md:h-16 md:flex-row md:px-8'>
      <Link href={"/"} className='logo flex items-center justify-center gap-2 font-bold transition hover:text-cyan-200'>
        <Image className="drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]" src="/tea2.png" width={40} height={40} alt="" />
        <span className='text-lg tracking-tight md:text-xl'>Buy Me a Chai!</span>
      </Link>
      {/* <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}

      <div className='relative flex items-center gap-2 pt-2 md:pt-0'>
        {session && <>
          <button onClick={() => { setShowdropdown(!showdropdown) }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="inline-flex items-center rounded-xl border border-cyan-200/20 bg-cyan-500/15 px-4 py-2.5 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-300" type="button">Menu <svg className="ms-3 h-2.5 w-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>

          <div id="dropdown" className={`z-50 ${showdropdown ? "" : "hidden"} absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-[#13243d] shadow-xl shadow-slate-950/40`}>
            <ul className="py-2 text-sm text-slate-100" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2.5 transition hover:bg-white/10 hover:text-cyan-200">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2.5 transition hover:bg-white/10 hover:text-cyan-200">My Page</Link>
              </li>
              <li>
                <Link onClick={() => { signOut() }} href="#" className="block px-4 py-2.5 transition hover:bg-white/10 hover:text-cyan-200">Sign out</Link>
              </li>
            </ul>
          </div>
        </>}


          
        {session &&
          <button type="button" className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-950/30 transition hover:-translate-y-0.5 hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-cyan-300" onClick={() => { signOut() }}>Logout</button>}

          
        {!session &&
          <Link href={"/login"}>
            <button type="button" className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-950/30 transition hover:-translate-y-0.5 hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-cyan-300" >Login</button></Link>}
      </div>
    </nav>
  )
}

export default Navbar
