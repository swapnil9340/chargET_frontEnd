import styled from "@/styles/style.module.scss";
import React from 'react'

const Index = () => {
  return (
    <div>
        <div className={styled.commonbox}> 
        <h2>{`Warning`}</h2>
        <p>{`Device Limit Reached`}</p>
         
        </div>
    </div>
  )
}

export default Index