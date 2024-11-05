
import Image from 'next/image'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import classes from '@/styles/style.module.scss'

const Bottenthreezone = () => {

    return (
        <div className="row justify-content-center">
            <div className="col-12 ">
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
            </div>
        </div>
    )
}

export default Bottenthreezone