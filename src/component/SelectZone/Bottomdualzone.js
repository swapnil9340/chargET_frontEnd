import Image from 'next/image'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import classes from '@/styles/style.module.scss'

const Bottomdualzone = () => {

    return (
        <div className={classes.bottomSinglezone}>
            <div className={classes.box}>

                <div className={classes.title}>
                    <p>{`Duel Zone`}</p>
                </div>
                <div className=''>
                    <div className={classes.DuelZone1}>

                    </div>
                    <div className={classes.DuelZone2}>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Bottomdualzone