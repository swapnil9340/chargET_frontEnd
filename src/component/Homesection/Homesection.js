import React from 'react'
import classes from '../../styles/style.module.scss'
import Suggestion from '../suggestions/suggestion'
import Card from '../Card/card'
const Homesection = (props) => {
  return (
    <div className={classes.homesection}>
        <h2 className={classes.homesectiontitle}>{props.title}</h2>
        {
            props.title === 'AI Suggetions' ?
            <div className={classes.scrollContainer}>
               {
                  [1,2,3,4,5,7,8,9,2].map((item, index)=>{
                     return <Suggestion name={'name'}  />
                  })
                }
       
        </div>:
        <div className={classes.scrollContainer}>
                {
                  [1,2,3,4,9].map((item, index)=>{
                     return <Card name={'name'}  />
                  })
                }
          
        </div>
         }
    </div>
  )
}

export default Homesection