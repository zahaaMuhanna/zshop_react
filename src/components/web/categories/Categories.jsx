import axios from 'axios';
import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import './Categories.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Link } from 'react-router-dom';

export default function Categories() {

    const getCategories=async()=>{
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?limit=5`)
      return data;
    }
    const {data,isLoading} = useQuery('web_categories',getCategories);


    if(isLoading){
      return <p>Loading...</p>
    }

  return (
      <div className="container">
          <Swiper
            modules={[Navigation, Pagination,Autoplay]}
            spaceBetween={50}
            slidesPerView={3.3}
            navigation
            pagination={{ clickable: true ,
                el:'.swiper-custem-pagenation'
            }}
            // onSlideChange=() =>
            // onSwiper={(swiper) =>
          >
          {data?.categories.length ? data ?.categories.map( (category)=>
              <SwiperSlide key={category._id}>
                <Link to={`/products/category/${category._id}`}>
                <img src={category.image.secure_url}/>
                </Link> 
              </SwiperSlide>
          ):'<h2>categories not found </h2>'}
          </Swiper>
          <div className='swiper-custem-pagenation'></div>
          
      </div>
  )
}

{/* <div className="row">
        {data?.categories.length ? data ?.categories.map( (category)=>
              <div className="col-lg-4" key={category._id}>
                    <img src={category.image.secure_url}/>
                <h2>{category.name}</h2>
            </div>
        ):'<h2>categories not found </h2>'}
</div> */}