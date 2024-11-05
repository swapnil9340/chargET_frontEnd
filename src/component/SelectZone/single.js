
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
      <div className="col-12 ">
        <div className="custom-box">
          <div className="box-content" style={{ height: height ,boxShadow: select && boxShadow }} ></div>
          <div className="box-text">Single Zone</div>
          <div className={ hover ? classes.hoverButton : ""}>
          {hover && <button variant="contained" onClick={()=>handleusethis("singlezone1")}>use this</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Singlezone