import React from 'react'
import './contact.css'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const { title } = useParams()
  return (
    <div className='div-contact'>
      <h1>{title}</h1>
    </div>
  )
}

export default Contact
