import React from 'react'
import styled from '@/styles/style.module.scss'
import { FaUpload } from "react-icons/fa";

const Medialeftbar = () => {
  return (
    <div>
          <div className={`${styled.commonbox} ${styled.historybox}`}> 
            <h3 className={styled.commonboxTitle}>{'Upload File'}</h3>
            <div className={styled.imageUploadbox}>
                <p><FaUpload color='#000' size={28} /> </p>
                <p>{'Drag And Drop'}</p>
                <p>{'or'}</p>
                <button>{'Choose File'}</button>
            </div>
          </div>
          <div className={`${styled.commonbox} ${styled.historybox}`}> 
            <h3 className={styled.commonboxTitle}>{'Upload progress'}</h3>
          </div>
    </div>
  )
}

export default Medialeftbar