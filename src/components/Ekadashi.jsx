import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import axios from "axios"

function Ekadashi() {
  
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
 
  const filterData = book.filter((data) => data.category === 'Free');
console.log(filterData)


var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    
   <>
   
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-100 ">
    <div>

    <h1 className="font-bold text-2xl  pb-2 mt-24"> <a className=' '>एकादशी श्रृंगार दर्शन</a></h1>
    <p></p>
    </div>
   
   
   <div className="slider-container">
     
      <Slider {...settings}>
       { filterData.map((item)=>
        
        <Card item={item} key={item._id} />
       )}
      </Slider>
    </div>
    </div>
   </>
  );
}

export default Ekadashi