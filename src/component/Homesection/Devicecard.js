import { Box, Typography, Grid, Button, Container } from '@mui/material';
import styled from "@/styles/style.module.scss";
import ButtonFloat from '@/component/ButtonFloat/Index';
import Image from 'next/image';
export default function DeviceDashboard(props) {
  return (

      <div className={styled.devicedcard}>
        <h4 title={props.name}>{props.name}</h4>
        <div>
          <Image src={'/deviceimage.png'} width={100} height={100} alt='image' />
        </div>
        <button >{'Publish'}</button>
      </div>
  );
}
