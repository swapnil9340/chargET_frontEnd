import React from 'react'
import Styles from '@/styles/style.module.scss'
import { useForm } from 'react-hook-form';
const login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Submit = async (event) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email:event.email, password:event.password }),
      });

      if (response.ok) {

      } else {
        // Login failed, display error message
      }
    } catch (error) {
      // Handle error
      
    }
  };

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

          <form onSubmit={handleSubmit(Submit)}>
            <input type='email' {...register('email',  { required: true })} placeholder='Email' className={Styles.inputstylelogin} />
            {errors.email && <p>email is required.</p>}
            <input type='password'
            {...register('password', {
              required: 'Password is required',
              minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long'
              },
              validate: {
                  hasNumber: value =>
                      /\d/.test(value) || 'Password must contain at least one number',
                  hasUpperCase: value =>
                      /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter',
                  hasSpecialChar: value =>
                      /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'Password must contain at least one special character',
              }
          })}
             
             placeholder='Password'
              className={Styles.inputstylelogin} />
           { errors.password && <p>{errors.password.message}</p>}
            <button className={Styles.loginwithgoolebtn}>{`Log In`}</button>
          </form>
          <h4 className={Styles.pagecahngebtn}>{`Forgot Your Password`}</h4>
          <button type={"submit"} className={Styles.loginsubmitbtn}>{`Continue with Google`}</button>
        </div>
      </div>

    </div>
  )
}
login.layout = "layout1"
export default login