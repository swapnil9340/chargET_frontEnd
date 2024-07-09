import classes from "../../styles/style.module.scss"
import Image from 'next/image'

const suggestion = () => {
  return (
    <div className={classes.suggestionsection}>
      <div className={classes.suggestioncircle}>
        <div className={classes.suggestionimagebox}>
          <Image src="/user.jpg" width={100} height={100} alt="Picture of the author"/>
        </div>
      </div>
      <p className={classes.suggestionName}>hello world</p>
    </div>
  )
}

export default suggestion