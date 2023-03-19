import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Detail from '../components/Detail'
import NavBar from '../components/Navbar'
import MailList from '../components/MailList'

const HotelDetail = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
    
      <div className='DetailContainer'>
        <div className='detailhotel'>
        <button>Reserve or Book Now!</button> 
        <h1 >Tower Street Apartments</h1>
        <p >Thailand 99/225 Bangkok </p>
        <h5>Excellent location -500m from center</h5>
        <h4>Book a stay $114 at this property and get a free airport taxi</h4>
        
        </div>
        <Detail />
        <MailList/>
      <Footer/>
      </div>
    </div>
  )
}

export default HotelDetail;