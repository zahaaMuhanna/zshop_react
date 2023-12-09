import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { CartContext } from '../context/Cart.jsx';

function Product() {
    const {productId} = useParams();

    const getProduct=async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
        return data.product;
    }

    const {data,isLoading} = useQuery('product_details',getProduct) 


    const {addToCartContext}=useContext(CartContext);

    const addToCart=async(productId)=>{
        const res = await addToCartContext(productId);
    }


    if(isLoading){
        return <h2>loading...</h2>
    }
  return (
    <div className="container">
      <div className="row">
          <div className="col-lg-4">
          {data.subImages.map( (img,index)=>
                <img src={data.mainImage.secure_url}></img>
            )}
          </div>
          </div>
          <div className="col-lg-8">
            <h2>{data.name}</h2>
            <p>{data.price}</p>
            <button className='btn btn-outline-info' onClick={()=>addToCart(data._id)}>Add To Cart</button>
          </div>
      </div>
  )
}

export default Product