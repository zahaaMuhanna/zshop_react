import React, { useContext } from 'react'
import Input from '../pages/Input.jsx'
import { useFormik } from 'formik'
import {  sendcodeSchema } from '../../validate/validate.js'
import axios from 'axios'
import {toast} from 'react-toastify'
import {  useNavigate } from 'react-router-dom'

export default function SendCode() {

    const navigate = useNavigate();

    const initialValues={
            email:'',
    };

    const onSubmit =async users =>{

        const {data} =await axios.patch(`${import.meta.env.VITE_API_URL}/auth/sendcode`,users);
        console.log(data)
        if(data.message=='success'){
                toast.success('code sended', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                navigate('/forgotpassword')
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema:sendcodeSchema
    });

    const inputs=[
        {
            id:'email',
            type:'email',
            name:'email',
            title:'user email',
            value:formik.values.email,
        },
    ]

    const renderInputs = inputs.map( (input , index) =>
            <Input type={input.type} 
            id={input.id} 
            name={input.name} 
            title={input.title} 
            value={input.value}
            onChange={input.onChange || formik.handleChange}  
            errors={formik.errors}
            onBlur={formik.handleBlur}
            touched={formik.touched}
            key={index} />
    )
  return (
    <>
        <div className='container'>
               <h2>Send Code</h2>
                 <form onSubmit={formik.handleSubmit}>
                    {renderInputs}
                    <button type='submit' className=' bg-white border-1 mb-4' disabled={!formik.isValid}> send </button>
                </form> 
        </div>
    </>
  )
}
