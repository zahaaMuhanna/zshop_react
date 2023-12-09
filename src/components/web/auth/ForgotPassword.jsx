import React from 'react'
import Input from '../pages/Input.jsx'
import { useFormik } from 'formik'
import { forgotpasswordSchema, registerSchema } from '../../validate/validate.js'
import axios from 'axios'
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

export default function ForgotPassword() {
    const navigate = useNavigate();
    const initialValues={
            email:'',
            password:'',
            code:'',
    }


    const onSubmit =async users =>{
        const {data} =await axios.patch(`${import.meta.env.VITE_API_URL}/auth/forgotPassword`,users);
        if(data.message=='success'){
            toast.success('signup succeffuly', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });  
                navigate('/login')
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema:forgotpasswordSchema
    });

    const inputs=[
        {
            id:'email',
            type:'email',
            name:'email',
            title:'user email',
            value:formik.values.email,
        },
        {
            id:'password',
            type:'password',
            name:'password',
            title:'user password',
            value:formik.values.password,
        },
        {
            id:"code",
            type:"text",
            name:"code",
            title:"code",
            value:formik.values.code,
        }
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
               <h2>Change your password</h2>
                 <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
                    {renderInputs}
                    <button type='submit' className='submitbutton bg-white border-1 mb-4' disabled={!formik.isValid}> submit </button>
                </form> 
        </div>
    </>
  )
}
