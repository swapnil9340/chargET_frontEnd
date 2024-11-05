
import Image from 'next/image'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import classes from '@/styles/style.module.scss'
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const Singlezone = ({ height = 120 ,hover = true , select}) => {
  const router = useRouter();
  const handleusethis = () => {
    router.push("creationscreen?layout=singlezone1")
  }
   const boxShadow = "rgba(0, 255, 0, 0.2) 0px 0px 0px 1px inset, rgba(0, 128, 0, 0.9) 0px 0px 0px 1px"
  return (
    <div className={`row justify-content-center  ${ hover ? classes.hoverzonesection :""}`}>
        <div className={classes.custombox}>
          <div className="box-content" style={{ height: height ,boxShadow: select && boxShadow }} ></div>
          <div className='d-flex justify-content-between align-items-center py-2'>
                   
          <h3 className={classes.hoverzonetitle}>Single Zone</h3>
          {hover && <button className={classes.hoverzoneBtn} onClick={()=>handleusethis("singlezone1")}>{`use this`}</button>}
       </div>
        </div>
    </div>
  )
}

export default Singlezone