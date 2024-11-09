import React from 'react'
import styled from '@/styles/style.module.scss'
import { FaUpload } from "react-icons/fa";
import Singlezone from './single';
import { Button } from '@mui/material';
import CompositionSequence from './CompostionSequence';
import DuelZone from './Dual';
import Threezone from './Threezone';

const Rightbarcreationscreen = (props) => {
const {selectzone, setSelectZone} = props

  function handleZone(zone, selectedKey) {
    setSelectZone(prevZones =>
      prevZones.map(zoneObj => ({
        ...zoneObj,
        [zone]: Object.keys(zoneObj[zone]).reduce((acc, key) => {
          acc[key] = key === selectedKey; // Set only the selected key to true, others to false
          return acc;
        }, {})
      }))
    );
  }
  return (
    <div>
      <div className={`${styled.commonbox} ${styled.historybox} `}>
        <h3 className={styled.commonboxTitle}>{'Zone Selection'}</h3>

        <div className='row'>
          <div className='col-6'>
            {props.zone === "singlezone1" && <Singlezone height={67} hover={false}  select={selectzone[0].zone1.selectzone1}></Singlezone>}
            {props.zone === "singlezone2" && <DuelZone height={67} hover={false}  select={selectzone[0].zone2}></DuelZone>}
            {props.zone === "singlezone3" && <Threezone height={67} hover={false}  select={selectzone[0].zone3}></Threezone>}
          </div>
          <div className='col-6 d-flex mt-2 align-items-center' >
            {props.zone === "singlezone1" && <Button onClick={()=>handleZone("zone1" , "selectzone1")}>zone1</Button>}
            {props.zone === "singlezone2" && <div><Button onClick={()=>handleZone("zone2" , "selectzone1")}>zone1</Button><Button onClick={()=>handleZone("zone2" , "selectzone2")}>zone1</Button></div>}
            {props.zone === "singlezone3" && <div><Button onClick={()=>handleZone("zone3" , "selectzone1")}>zone1</Button><Button onClick={()=>handleZone("zone3" , "selectzone2")}>zone1</Button><Button onClick={()=>handleZone("zone3" , "selectzone3")}>zone1</Button></div>}
          </div>
        </div>

      </div>
      <div className={`${styled.commonbox} ${styled.historybox}`}>
        <CompositionSequence selectcampaign ={props.selectcampaign} setselectcampaign={props.setselectcampaign}></CompositionSequence>
      </div>
    </div>
  )
}

export default Rightbarcreationscreen