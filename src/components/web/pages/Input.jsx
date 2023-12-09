import React from 'react'

export default function Input({type='text',id,name,title,onChange,value,errors,touched,onBlur}) {
  return (
    
    <>
      <div className=' mb-3 inputform'>
          <label htmlFor='id' className='labelforform'>{title}</label>
          <input type={type} name={name}  className='inputforform' id={id} value={value} onChange={onChange} onBlur={onBlur}></input>
          {touched[name] && errors[name]&& <p className='text text-warning'> {errors[name]} </p>}
      </div>
    </>
  )
}
