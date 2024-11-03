import Image from 'next/image'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import classes from '@/styles/style.module.scss'

const DuelZone = () => {

    return (
        <div className={classes.Singlezone}>
            <div className={classes.box}>
                <div className='col'>
                    <div className={classes.DuelZone1}>

                    </div>
                    <div className={classes.DuelZone2}>

                    </div>
                </div>
                <div className={classes.title}>
                    <p>{`Duel Zone`}</p>
                </div>
            </div>
        </div>
    )
}

export default DuelZone