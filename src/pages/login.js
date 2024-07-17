import React from 'react'
import Styles from '@/styles/style.module.scss'

const login = () => {
  return (
    <div className={Styles.accespage}>
         <div className={Styles.rightside}>

</div>
    <div className={Styles.leftside}>
        <div className={Styles.contentbox}>
          <h2 className={Styles.maintitle}>{`Login In`}</h2>
          {/* <h3 className={Styles.subtitle}>{`Create Your account`}</h3>
          <p className={Styles.para}>{`Take the next step`}</p>
          <button className={Styles.loginwithgoolebtn}>{`Continue with Google`}</button>
          <div class="header__center">{`Or`}</div> */}

          <form>
              <input type='email' placeholder='Email' className={Styles.inputstylelogin}/>
              <input type='password' placeholder='Password' className={Styles.inputstylelogin}/>
              <button className={Styles.loginwithgoolebtn}>{`Log In`}</button>
          </form>
          <h4 className={Styles.pagecahngebtn}>{`Forgot Your Password`}</h4>
          <button className={Styles.loginsubmitbtn}>{`Continue with Google`}</button>
        </div>
    </div>
   
  </div>
  )
}
login.layout = "layout1"
export default login