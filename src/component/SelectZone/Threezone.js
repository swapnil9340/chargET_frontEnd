
import Image from 'next/image'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import classes from '@/styles/style.module.scss'

const Threezone = () => {

    return (
        <div className={classes.Singlezone}>
            <div className={classes.box}>
                <div className={`${classes.ThreeZone1} col`}>
                    <div className='col-12 d-flex '>
                        <div className={` ${classes.ThreeZone} col-10`}>

                        </div>
                        <div className={`${classes.ThreeZone3} col-2`}>

                        </div> 
                    </div>
                    <div className={classes.ThreeZone2}>

                    </div>
                </div>
                <div className={classes.title}>
                    <p>{`Three Zone`}</p>
                </div>
            </div>
        </div>
    )
}

export default Threezone