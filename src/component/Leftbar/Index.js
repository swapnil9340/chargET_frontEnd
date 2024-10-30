import styled from "@/styles/style.module.scss";
import React from 'react';
import ButtonFloat from '@/component/ButtonFloat/Index';
import HistoryList from "../Homesection/HistoryList";
const Index = () => {
  return (
    <div className="">
          <div className={`${styled.commonbox} ${styled.warningbox}`}> 
              <h2>{`Warning`}</h2>
              <p>{`Device Limit Reached`}</p>
              <div className={styled.worningboxBTN}>
                <ButtonFloat text={'Extend Device Limits'}></ButtonFloat>
              </div>
          </div>
          <div className={`${styled.commonbox} ${styled.historybox}`}> 
          <h3 className={styled.commonboxTitle}>{'Recent History'}</h3>
            <div className={styled.historyList}>
              <HistoryList/>
            </div>
            <div className={styled.worningboxBTN}>
                <ButtonFloat text={'View All'}></ButtonFloat>
              </div>
          </div>
    </div>
  )
}

export default Index