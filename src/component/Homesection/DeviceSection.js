import React, { useEffect } from 'react'
// import DeviewImg from '../../../public/DeviewImg.png'
import DeviewImg from '../../../public/DeviewImgss.png'
import Image from 'next/image'
import styled from "@/styles/style.module.scss";
import cookie from "js-cookie";
import { RiExpandLeftRightLine } from "react-icons/ri";
import Devicecard from '@/component/Homesection/Devicecard'
import axios from 'axios';
import Cookies from 'js-cookie';
import Slider from "react-slick";

const DeviceSection = () => {
  const [device, setdevice] = React.useState([]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll:2
  };
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

  return (
    <div className={`${styled.commonbox} ${styled.DeviceSection} container `}>
      
        <div className={styled.DevicesectionCard}>
          <div className='d-flex justify-content-between align-items-center'>
            <h3 className={styled.commonboxTitle}>{'YOUR DEVICES'}</h3>
            <span>{'View all '}<RiExpandLeftRightLine />                  </span>
          </div>
          <div className='d-flex w-100'>
            <div className="slider-container w-100 py-3">
                <Slider {...settings}>
                  {
                    device.map((data ,key) => {
                      return (<Devicecard key={key} name={data.device_name}></Devicecard>)
                    })
                  }
               </Slider>
            </div>
          </div>
        </div>
        <div className={styled.DevicesectionImage}>
         <div className={styled.deviceiamge}>
           <Image src={DeviewImg.src} alt='image' width={500} height={500} />
          </div>
        </div>
      
    </div>
  )
}

export default DeviceSection

