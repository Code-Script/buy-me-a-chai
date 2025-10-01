import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-indigo-950 text-white flex justify-center items-center px-4 h-14 '>
      <p>Copyright &copy; {currentYear} BuyMeAChai | All Rights Reserved</p>
    </footer>
  )
}

export default Footer
