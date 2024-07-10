import classes from "../../styles/style.module.scss"
import React from 'react'
import Image from 'next/image'
import { FaArrowUpRightDots } from "react-icons/fa6";

const card = (props) => {
  return (
    <div className={classes.card}>
          <div className={classes.cardimage}>
            <Image src="/user.jpg" width={100} height={100} alt="Picture of the author"/>
          </div>
          <div className={classes.cardInfo}>
            <h3 className={classes.locationName}>{props.name}</h3>
            <h4 className={classes.OwnerName}>{`@amitjain`}</h4>
            <p className={classes.priceBar}> <span>{`Base Price`}</span><span>{`$311`}</span></p>
          </div>
          <button className={classes.postionbutton}> <span> <FaArrowUpRightDots /> </span> {`Publish`} </button>
    </div>
  )
}

export default card