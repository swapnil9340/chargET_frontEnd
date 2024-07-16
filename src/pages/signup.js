import React from 'react'
import Styles from '@/styles/style.module.scss'
const signup = () => {
  return (
    <div className={Styles.accespage}>
      <div className={Styles.leftside}>
          <div className={Styles.contentbox}>
            <h2 className={Styles.maintitle}>{`Sign Up`}</h2>
            <h3 className={Styles.subtitle}>{`Create Your account`}</h3>
            <p className={Styles.para}>{`Take the next step`}</p>
            <button className={Styles.loginwithgoolebtn}>{`Continue with Google`}</button>
            <div class="header__center">{`Or`}</div>

            <form>
                <input type='email' placeholder='Email' className={Styles.inputstylelogin}/>
                <input type='password' placeholder='Password' className={Styles.inputstylelogin}/>
                <button className={Styles.loginsubmitbtn}>{`Sign Up`}</button>
            </form>
            <h4 className={Styles.pagecahngebtn}>{`Already have a account? Log In`}</h4>
          </div>
      </div>
      <div className={Styles.rightside}>

      </div>
    </div>
  )
}
export default signup 