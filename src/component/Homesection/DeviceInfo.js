import React from 'react'
import styled from "@/styles/style.module.scss";
import { Md4K } from "react-icons/md";
import { TbRefreshDot } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";

const DeviceInfo = () => {
  return (
    <div className={`${styled.commonbox} ${styled.DeviceInfo} container `}>
           <div className='d-flex justify-content-between align-items-center'>
                  <h3 className={styled.commonboxTitle}>{'YOUR DEVICES'}</h3>
                  <button>{'See  more'}</button>
                </div>  
        <div className='row'>
            <div className='col-6'>
                <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                    <div><Md4K size={22} color='#9399a2'/>                    </div>
                    <div>
                        <span>{`Resolution`}</span>
                        <h4>{`Full HD`}</h4>
                    </div>
                </div>
            </div>
            <div className='col-6'>
                <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                    <div><TbRefreshDot size={22} color='#9399a2' />
                    </div>
                    <div>
                        <span>{`Orientation`}</span>
                        <h4>{`Portrait`}</h4>
                    </div>
                </div>
            </div>
            <div className='col-6'>
                <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                    <div><FaLocationDot size={22} color='#9399a2'/></div>
                    <div>
                        <span>{`Location`}</span>
                        <h4>{`Minal Residency`}</h4>
                    </div>
                </div>
            </div>
            <div className='col-6'>
                <div className={`${styled.deviceinfocard} d-flex gap-2 align-items-start`}>
                    <div><CiSettings size={22} color='#9399a2'/></div>
                    <div>
                        <span>{`HDR Support`}</span>
                        <h4>{`True`}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeviceInfo