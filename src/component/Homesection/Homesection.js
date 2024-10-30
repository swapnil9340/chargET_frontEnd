import React from 'react'
import classes from '../../styles/style.module.scss'
import Suggestion from '../suggestions/suggestion'
import Card from '../Card/card'
import Devicecard from "@/component/Homesection/Devicecard"
const Homesection = (props) => {
  return (
    <div className={classes.homesection}>
    {   props.title === 'Top Publishers' &&  <h2 className={classes.homesectiontitle}>{props.title}</h2>}
        {
            props.title === 'Top Publishers' ?
            <div className={classes.scrollContainer}>
               {
                  [1,2,3].map((item, index)=>{
                     return <Suggestion   key={index} name={'name'}  />
                  })
                }
       
        </div>
        :
        <div className={classes.scrollContainer}>
        <Devicecard></Devicecard>
          
        </div>
         }
    </div>
  )
}

export default Homesection