import Image from 'next/image'
import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { FaHeart , FaRegHeart } from "react-icons/fa";
import classes from '@/styles/style.module.scss'

const Mediacard = () => {
  const [like,setlike]=useState()
  return (
    <div className={classes.mediacard}>
        <div className='text-end'><BsThreeDots size={18}/></div>
        <div className={classes.mediacardimage}>
            <img  src='https://i.ibb.co/qmLJq6g/Image-1.png' alt='image'></img>
        </div>
        <h3 className={classes.mediacardimgename}>Image Name</h3>
        <p className={classes.mediatype}>GIF</p>
        <p className={classes.mediafileSize}>1024KB</p>
        <div className='text-end'>
          {
            like ?  <span><FaHeart onClick={()=>{setlike(false)}}/></span> :
          <span ><FaRegHeart onClick={()=>{setlike(true)}} /></span> 
        }
        </div>
        
    </div>
  )
}

export default Mediacard