import React from 'react'
import styled from '@/styles/style.module.scss'
import Image from 'next/image'
import { MdHighQuality } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";
import { FaLocationPin } from "react-icons/fa6";
import deviceimage from '../../../public/deviceimage.png'
const Screencard = ({ id ,selected , selecteditem}) => {
  return (
    <div className={`${styled.screencard} ${selecteditem.includes(id)&& styled.screenselected}`} onClick={()=>{selected(id)}}>
      <div className={styled.screenImage}>
        <Image src={deviceimage.src} alt='image' width={100} height={100}  />
      </div>
      <div className={styled.sreenDetails}>
        <h3 className={styled.screenName}>{`Galaxy S1`}</h3>
        <ul>
            <li>
                <span><MdHighQuality /> {`1080x2040`}
                </span>
            </li>
            <li>
                <span><BsArrowRepeat/>{`Portrait`}</span>
            </li>
            <li> <span><FaLocationPin/>{`Minal Residen`}</span></li>
        </ul>
        <button className={styled.seemorebtn}>{`See More`}</button>
      </div>
    </div>
  )
}
export default Screencard