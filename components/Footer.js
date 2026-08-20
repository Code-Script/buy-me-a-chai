import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='flex min-h-16 items-center justify-center border-t border-cyan-200/10 bg-[#08101d] px-5 py-4 text-center text-sm text-slate-300'>
      <p>Copyright &copy; {currentYear} <span className="font-semibold text-cyan-100">BuyMeAChai</span> <span className="mx-1 text-cyan-400/70">|</span> All Rights Reserved</p>
    </footer>
  )
}

export default Footer
