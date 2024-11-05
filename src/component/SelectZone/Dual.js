import Image from 'next/image'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import classes from '@/styles/style.module.scss'
import { useRouter } from 'next/router';

const DuelZone = ({hover = true , select}) => {

    const router = useRouter();
    const handleusethis = () => {
        router.push("creationscreen?layout=singlezone2")
      }

      const boxShadow = "rgba(0, 255, 0, 0.2) 0px 0px 0px 1px inset, rgba(0, 128, 0, 0.9) 0px 0px 0px 1px"

    return (
        <div className={`row justify-content-center  ${ hover ? classes.hoverzonesection :""}`}>
            <div className="col-12 ">
                <div className={classes.custombox}>
                      
                      <div className=" col box-content" style={{boxShadow: select?.selectzone1  && boxShadow }}></div>
                      <div className=" col box-content1" style={{boxShadow: select?.selectzone2 && boxShadow }}></div>
                      
                      <div className='d-flex justify-content-between align-items-center py-2'>
                    
                        <h3 className={classes.hoverzonetitle}>Dual Zone</h3>
                        {hover && <button className={classes.hoverzoneBtn} onClick={()=>handleusethis("singlezone1")}>{`use this`}</button>}
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default DuelZone