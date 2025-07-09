import React from 'react'
import '../styles/Footer.css'


const Footer = () => {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} Aditya Pratap Singh. All rights reserved.
    </footer>
  )
}

export default Footer
