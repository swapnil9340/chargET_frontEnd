import React from 'react'
import DeviewImg from '../../../public/DeviewImg.png'
import Image from 'next/image'
import styled from "@/styles/style.module.scss";
import { RiExpandLeftRightLine } from "react-icons/ri";
import Devicecard from '@/component/Homesection/Devicecard'
const DeviceSection = () => {
  return (
    <div className={`${styled.commonbox} ${styled.DeviceSection} container `}>
        <div className='row'>
            <div className='col-9'>
                <div className='d-flex justify-content-between align-items-center'>
                  <h3 className={styled.commonboxTitle}>{'YOUR DEVICES'}</h3>
                  <span>{'View all'}<RiExpandLeftRightLine />                  </span>
                </div>  
              <div>
                {
                 <Devicecard></Devicecard>
                    
                }
              </div>
            </div>
            <div className='col-3'> 
                <Image src={DeviewImg.src} alt='image' width={160} height={160} />
            </div>
        </div>
    </div>
  )
}

export default DeviceSection