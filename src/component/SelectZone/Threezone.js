
import Image from 'next/image'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import classes from '@/styles/style.module.scss'

const Threezone = () => {

    return (
        <div class="row justify-content-center">
            <div class="col-12 ">
                <div class="custom-box">
                      <div className='d-flex'>
                      <div class=" col box-content"></div>
                      <div class=" col box-cont"></div>
                      </div>
                      <div class=" col box-content1"></div>
                      
                    <div class="box-text">Three Zone</div>
                </div>
            </div>
        </div>
    )
}

export default Threezone