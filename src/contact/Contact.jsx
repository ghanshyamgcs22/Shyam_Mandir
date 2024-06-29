import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
    <Navbar/>

    
    <div className='mt-52 mb-56 '>
    <label className="input input-bordered flex items-center gap-5">
  Name
  <input type="text" className="grow" placeholder="Name" />
</label>
<label className="input input-bordered flex items-center gap-2 mt-7">
  Phone No
  <input type="number" className="grow" placeholder="+91****" />
</label>
<label className="input input-bordered flex items-center gap-2 mt-7">
  Query
  <input type="text" className="grow" placeholder="........................." />
</label>

<button className="btn btn-neutral mt-7">Submit</button>

    </div>
    <Footer/>
    </>
  )
}

export default Contact