import React from 'react'
import { useParams } from 'react-router-dom'

function Contact() {
const seeParam=useParams()
console.log(seeParam);


  return (
    <div>
        contact us
    </div>
  )
}

export default Contact