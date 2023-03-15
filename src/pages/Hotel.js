import React from 'react'
import NavBar from '../components/Navbar'
import Header from "../components/Header"
import MailList  from '../components/MailList'
import Footer from '../components/Footer'

const Hotel = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <div className='hotelContainer'>
      <MailList/>
      <Footer/>
      </div>
    </div>
  )
}

export default Hotel;