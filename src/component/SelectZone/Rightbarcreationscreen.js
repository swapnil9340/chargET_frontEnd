import React from 'react'
import styled from '@/styles/style.module.scss'
import { FaUpload } from "react-icons/fa";
import Singlezone from './single';
import { Button } from '@mui/material';
import CompositionSequence from './CompostionSequence';

const Rightbarcreationscreen = () => {
  return (
    <div>
      <div className={`${styled.commonbox} ${styled.historybox}`} style={{height:200}}>
        <h3 className={styled.commonboxTitle}>{'Zone Selection'}</h3>

        <div className='col-12 d-flex' style={{height:133}}>
        <div className='col-6'  >
          <Singlezone height={67}></Singlezone>
         </div>
        <div className='col-6 d-flex mt-2 align-items-center' >
          <Button>zone1</Button>
          <Button>zone2</Button>
        </div>
        </div>

      </div>
      <div className={`${styled.commonbox} ${styled.historybox}`}>
        <CompositionSequence></CompositionSequence>
      </div>
    </div>
  )
}

export default Rightbarcreationscreen