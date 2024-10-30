import React from 'react'
import styled from "@/styles/style.module.scss";

const Index = ({text}) => {
  return (
    <button className={styled.floatingbn}>{text}</button>
  )
}

export default Index