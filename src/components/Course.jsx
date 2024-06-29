import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import axios from "axios"

function Course() {
  const [book, setBook] = useState([])

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://shyamji-backend.onrender.com/book/getbook")
        console.log(res.data.data)
        console.log("Done")
        setBook(res.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  }, [])

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className='mt-28 items-center justify-center text-center'>
          {/* <h1 className='text-2xl font-semibold md:text-4xl'>Welcome!!</h1> */}
          {/* <p className='mt-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem id blanditiis obcaecati doloremque sed officia libero voluptatum. Voluptatibus architecto nesciunt quo quod corrupti inventore placeat accusamus sit velit, quam dolorum.</p> */}
          <Link to='/'>
            <button className="btn btn-active btn-secondary mt-5">HOME</button>
          </Link>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
          {
            book.map((item) => (
              <Card item={item} key={item._id} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
