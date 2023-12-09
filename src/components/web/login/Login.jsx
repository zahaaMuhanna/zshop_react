import React, { useContext } from 'react'
import Input from '../pages/Input.jsx'
import { useFormik } from 'formik'
import { loginSchema } from '../../validate/validate.js'
import axios from 'axios'
import {toast} from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User.jsx'

export default function Login() {

    const navigate = useNavigate();
    let {userToken,setUserToken}=useContext(UserContext);
    if(userToken){
        navigate(-1);
    }

    const initialValues={
            email:'',
            password:'',
    };

    const onSubmit =async users =>{

        const {data} =await axios.post(`https://ecommerce-node4.vercel.app/auth/signin`,users);
        if(data.message=='success'){
               localStorage.setItem("userToken",data.token)
                setUserToken(data.token)
                toast.success('login successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                navigate('/')
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema:loginSchema
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
               <h2>Log in</h2>
                 <form onSubmit={formik.handleSubmit}>
                    {renderInputs}
                    <button type='submit' className=' bg-white border-1 mb-4' disabled={!formik.isValid}> Log in </button>
                    <Link to='/sendcode'> forget password ?</Link>
                </form> 
        </div>
    </>
  )
}
