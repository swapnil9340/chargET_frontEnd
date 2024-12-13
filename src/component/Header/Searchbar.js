import React, { useState } from 'react'
import classes from '../../styles/style.module.scss'
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa"
import {useRouter} from 'next/router';
import WestIcon from '@mui/icons-material/West';
import { IconButton, InputAdornment, TextField } from "@mui/material";
const Header = () => {
    const [seartext, setSearchtext]= useState('')
    const k = useRouter()
    console.log(useRouter().pathname , k)
  return (
    <div className={classes.Header}>
    {useRouter().pathname !== "/" && <div><span>{<IconButton ><FaArrowLeft onClick={(e)=>{Router.push(-1)}} ></FaArrowLeft></IconButton>}</span></div>}
        <div className={classes.searchbar}>
        {Boolean(seartext.length ===0) && <span><IoSearch /></span>  }
         <input type='text' placeholder='Search' onChange={(e)=>{setSearchtext(e.target.value)}} />
        {Boolean(seartext.length !==0) && <span><RxCross2 /></span>}
        </div>
    </div> 
  )
}

export default Header