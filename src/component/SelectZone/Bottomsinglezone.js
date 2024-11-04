import Image from 'next/image'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import classes from '@/styles/style.module.scss'

const Bootomsinglezone = () => {

    return (
        <div className={classes.bottomSinglezone}>
            <div className={classes.box}>

                <div className={classes.title}>
                    <p>{`Single Zone`}</p>
                </div>
                <div className={classes.layout}>

                </div>
            </div>
        </div>
    )
}

export default Bootomsinglezone