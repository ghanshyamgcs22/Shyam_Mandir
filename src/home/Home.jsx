import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FreeBook from '../components/FreeBook'
import Footer from '../components/Footer'
import Ekadashi from '../components/Ekadashi'
import News from '../components/News'

function Home() {
  return (
    <>
     <Navbar/>
    <Banner/>  
    <FreeBook/>
    <Ekadashi/>
    <News/>
    <Footer/>
    </>
  )
}

export default Home