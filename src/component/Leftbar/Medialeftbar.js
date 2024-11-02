import React from 'react'
import styled from '@/styles/style.module.scss'
const Medialeftbar = () => {
  return (
    <div>
          <div className={`${styled.commonbox} ${styled.historybox}`}> 
            <h3 className={styled.commonboxTitle}>{'Upload File'}</h3>
            {/* <div className={styled.ima}></div> */}
          </div>
          <div className={`${styled.commonbox} ${styled.historybox}`}> 
            <h3 className={styled.commonboxTitle}>{'Upload progress'}</h3>
          </div>
    </div>
  )
}

export default Medialeftbar