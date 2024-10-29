import React, { useState } from 'react'
import classes from '../../styles/style.module.scss'
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaArrowUpRightDots } from "react-icons/fa6";

const Header = () => {
    const [seartext, setSearchtext]= useState('')
  return (
    <div className={classes.Header}>
        <div className={classes.searchbar}>
        {Boolean(seartext.length ===0) && <span><IoSearch /></span>  }
         <input type='text' placeholder='Search' onChange={(e)=>{setSearchtext(e.target.value)}} />
        {Boolean(seartext.length !==0) && <span><RxCross2 /></span>}
        </div>
        {/* <button className={`${classes.headerbutton} shinebtn`}>
            <span><FaArrowUpRightDots/></span>
            Publish
        </button> */}
    </div> 
  )
}

export default Header