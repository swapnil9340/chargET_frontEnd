import classes from "../../styles/style.module.scss"
import React from 'react'
import Image from 'next/image'

const card = () => {
  return (
    <div className={classes.card}>
        <div className={classes.cardimage}>
          <Image src="/user.jpg" width={100} height={100} alt="Picture of the author"/>
        </div>
    </div>
  )
}

export default card