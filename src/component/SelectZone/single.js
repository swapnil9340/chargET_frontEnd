import Image from 'next/image'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import classes from '@/styles/style.module.scss'

const Singlezone = () => {

    return (
        <div className={classes.Singlezone}>
            <div className={classes.box}>
                <div className={classes.layout}>

                </div>
                <div className={classes.title}>
                    <p>{`Single Zone`}</p>
                </div>
            </div>
        </div>
    )
}

export default Singlezone