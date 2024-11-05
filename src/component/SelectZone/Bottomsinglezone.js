import Image from 'next/image'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import classes from '@/styles/style.module.scss'

const Bootomsinglezone = () => {

    return (
        <div className="row justify-content-center">
            <div className="col-12 ">
                <div className="custom-box d-flex">
                    <div className='col-6'>
                    <div className="box-text">Single Zone</div>
                    </div>
                    <div className='col-6'>
                        <div className="box-content" style={{height:120}}></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Bootomsinglezone