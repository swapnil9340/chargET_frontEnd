import Image from 'next/image'
import React, { useState } from 'react'
import { FaHeart , FaRegHeart } from "react-icons/fa";
import classes from '@/styles/style.module.scss'

const Mediacard = ({item , hnadlechnage =()=>{},select='' , key} ) => {
  const [like,setlike]=useState()
  
  return (
    <div className={`${classes.mediacard} ${select} `} onClick={()=>hnadlechnage(item)}  >
        <div className={classes.mediacardimage} >
            <Image width={100} height={100}  src={item.asset_url || '/user.jpg' } quality={100}  alt='image'></Image>
        </div>
        <h3 className={classes.mediacardimgename}>{item.campaign_name||item.media_id || item._id}</h3>
        <div className='d-flex justify-content-between align-content-center'>
          <p className={classes.mediafileSize}>{'JuLY 01, 2024'}</p>
          <div  className={classes.mediacardLike}>
            {
              like ?  <span><FaHeart onClick={()=>{setlike(false)}} color='red'/></span> :
              <span ><FaRegHeart onClick={()=>{setlike(true)}} /></span> 
            }
          </div>
        </div>
        
    </div>
  )
}

export default Mediacard