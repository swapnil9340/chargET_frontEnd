import React from 'react'
import DeviewImg from '../../../public/DeviewImg.png'
import Image from 'next/image'
import styled from "@/styles/style.module.scss";
import { RiExpandLeftRightLine } from "react-icons/ri";
import Devicecard from '@/component/Homesection/Devicecard'
import axios from 'axios';
import Cookies from 'js-cookie';
const DeviceSection = () => {
  const [device, setdevice] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const cookieValue = Cookies.get('ChargeET_UserToken');

      if (!cookieValue) {
        console.warn("User token cookie not found.");
        return;
      }

      const options = {
        method: 'POST',
        url: 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/',
        params: { type: 'register_device', action: 'get' },
        headers: {
          'Content-Type': 'application/json',
          Authorization: cookieValue,
        },
        data: {},
      };

      try {
        const { data } = await axios.request(options);
        if (data.status = 'success') {

          setdevice(data.devices);
        }
        else {
          setdevice([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };


    fetchData();
  }, [])
  console.log(device)
  return (
    <div className={`${styled.commonbox} ${styled.DeviceSection} container `}>
      <div className='row'>
        <div className='col-9'>
          <div className='d-flex justify-content-between align-items-center'>
            <h3 className={styled.commonboxTitle}>{'YOUR DEVICES'}</h3>
            <span>{'View all'}<RiExpandLeftRightLine />                  </span>
          </div>
          <div className='d-flex'>
            {
              device.map((data ,key) => {
                return (<Devicecard key={key} name={data.device_name}></Devicecard>)
              })
            }
          </div>
        </div>
        <div className='col-3'>
          <Image src={DeviewImg.src} alt='image' width={160} height={160} />
        </div>
      </div>
    </div>
  )
}

export default DeviceSection