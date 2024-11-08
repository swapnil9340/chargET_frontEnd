
import Image from 'next/image'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import classes from '@/styles/style.module.scss'

const Bottenthreezone = () => {

    return (
        <div className={`row justify-content-center ${ classes.hoverzonesection }`}>
                    <div className={classes.custombox}>
                <div className="custom-box d-flex">
                    <div className='col-6'>
                    <div className="box-text">Three Zone</div>
                    </div>
                    <div className='col-6'>
                    <div className='d-flex'>
                            <div className=" col box-content"></div>
                            <div className=" col box-cont"></div>
                        </div>
                        <div className=" col box-content1"></div>
                    </div>

                   
                </div>
                <div className='d-flex justify-content-between align-items-center py-2'>
                   
                   <h3 className={classes.hoverzonetitle}>Three Zone</h3>
                    <button className={classes.hoverzoneBtn} onClick={()=>handleusethis("singlezone1")}>{`use this`}</button>
                  </div>
            </div>
        </div>
    )
}

export default Bottenthreezone