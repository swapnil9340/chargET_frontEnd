import React from 'react'
import styled from '@/styles/style.module.scss'
import { FaUpload } from "react-icons/fa";
import Singlezone from './single';
import { Button } from '@mui/material';
import CompositionSequence from './CompostionSequence';

const Rightbarcreationscreen = () => {
  return (
    <div>
      <div className={`${styled.commonbox} ${styled.historybox}`}>
        <h3 className={styled.commonboxTitle}>{'Zone Selection'}</h3>

        <div class="row justify-content-center">
          <div class="col-12 ">
            <div class="custom-box">
              <div class="box-content"></div>
              <div class="box-text">Single Zone</div>
            </div>
          </div>
        </div>
        <div className='col d-flex mt-2'>
          <Button>zone1</Button>
          <Button>zone2</Button>
        </div>

      </div>
      <div className={`${styled.commonbox} ${styled.historybox}`}>
        <CompositionSequence></CompositionSequence>
      </div>
    </div>
  )
}

export default Rightbarcreationscreen