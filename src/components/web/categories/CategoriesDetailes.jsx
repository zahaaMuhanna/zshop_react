import axios from 'axios';
import React from 'react'
import {  useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'

function CategoriesDetailes() {
    const{categoryId}=useParams();

    const getCategories=async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${categoryId}`)
        return data.products;
    }

    const {data,isLoading}=useQuery('categories_detailes',getCategories)

    if(isLoading){
        return <h2>Loading ...</h2>
    }
  return (
    <div className='products'>
        {data.length ? data.map( (product)=>
            <div className="product" key={product._id}>
                <img src={product.mainImage.secure_url} />
                <h2>{product.name}</h2>
                <Link to={`/product/${product._id}`}>Details</Link>
            </div>
        ):<h2>no products</h2>}
    </div>
  )
}

export default CategoriesDetailes