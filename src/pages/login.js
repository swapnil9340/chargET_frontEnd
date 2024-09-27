import React from 'react';
import Styles from '@/styles/style.module.scss';
import { useForm } from 'react-hook-form';

const Login = () => {
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
        body: JSON.stringify({ email: event.email, password: event.password }),
      });

      if (response.ok) {
        // Handle successful login
      } else {
        // Login failed, display error message
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className={Styles.accespage}>
      <div className={Styles.rightside}></div>
      <div className={Styles.leftside}>
        <div className={Styles.contentbox}>
          <h2 className={Styles.maintitle}>{`Login In`}</h2>

          <form onSubmit={handleSubmit(Submit)}>
            <input
              type="email"
              {...register('email', { required: true })}
              placeholder="Email"
              className={Styles.inputstylelogin}
            />
            {errors.email && <p>Email is required.</p>}
            
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
                },
                validate: {
                  hasNumber: (value) => /\d/.test(value) || 'Password must contain at least one number',
                  hasUpperCase: (value) =>
                    /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter',
                  hasSpecialChar: (value) =>
                    /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'Password must contain at least one special character',
                },
              })}
              placeholder="Password"
              className={Styles.inputstylelogin}
            />
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit" className={Styles.loginwithgoolebtn}>{`Log In`}</button>
          </form>

          <h4 className={Styles.pagecahngebtn}>{`Forgot Your Password`}</h4>
          <button className={Styles.loginsubmitbtn}>{`Continue with Google`}</button>
        </div>
      </div>
    </div>
  );
};

Login.layout = 'layout1';
export default Login;
