import Image from 'next/image'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import classes from '@/styles/style.module.scss'

const Bootomsinglezone = () => {

    return (
        <div className={`row justify-content-center  ${classes.hoverzonesection}`}>
                  <div className={classes.custombox}>

                <div className="custom-box d-flex">
                    <div className='col-6'>
                    <div className="box-text">Single Zone</div>
                    </div>
                    <div className='col-6'>
                        <div className="box-content" style={{height:120}}></div>
                    </div>

                </div>
            
                <div className='d-flex justify-content-between align-items-center py-2'>
                   
                   <h3 className={classes.hoverzonetitle}>Single Zone</h3>
                    <button className={classes.hoverzoneBtn} onClick={()=>handleusethis("singlezone1")}>{`use this`}</button>
                  </div>
                  </div>
            </div>
    )
}

export default Bootomsinglezone