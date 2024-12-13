import React from 'react';
import Styles from '@/styles/style.module.scss';
import { useForm } from 'react-hook-form';
import Button from '@/component/inputs/button';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import Loginaimge from '../../public/login.png'
import axios from 'axios';
import Image from 'next/image';

const Login = () => {
  const router = useRouter()
   const [loading , Setloading] = React.useState(false)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();


  const Submit = async (event) => {
  
    try {
      Setloading(true);
  
      const response = await axios.post(
        'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/?type=user&action=login',
        {
          email: event.email,
          password: event.password
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
  
      const data = response.data;
      router.push('/');
      const oneHour = 6/ 24; // 1 hour in days
      Cookies.set('ChargeET_UserToken', data.token, { expires: oneHour });
  
    } catch (error) {
      if (error?.response?.data?.message === "Wrong Credentials.") {
        setError('email', { type: 'custom', message: 'Invalid email' });
        setError('password', { type: 'custom', message: 'Invalid password' });

      } else if (error.request) {
        // No response was received
        console.error('Request error:', error.request);
      } else {
        // Something else went wrong in setting up the request
        console.error('Unexpected error:', error.message);
      }
    } finally {
      Setloading(false); // Make sure to stop loading in both success and error cases
    }
  };

  return (
    <div className={Styles.accespage}>
      <div className={Styles.rightside}>
        <div className={Styles.LoginaimgeContent}>
          <Image src={Loginaimge.src} alt={'image'} width={400} height={400} />
          <h3>{'Activate programmatic DOOH with precision. Globally.'}</h3>
          <p>{'Revolutionarize The DOOH'}</p>
        
        </div>
      </div>
      <div className={Styles.leftside}>
        <div className={Styles.contentbox}>
          <h2 className={Styles.maintitle}>{`Login to your account`}</h2>

          <form onSubmit={handleSubmit(Submit)}>
            <input
              type="email"
              {...register('email', {  required: 'Email is required',  })}
              placeholder="Email"
              className={Styles.inputstylelogin}
            />
            {errors.email && <p>{errors.email.message}</p>}
            
            <input
              type="password"
              name='password'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
                },
              
              })}
              placeholder="Password"
              className={Styles.inputstylelogin}
            />
            {errors.password && <p>{errors.password.message}</p>}

            <Button   type="submit"  variant="outlined" loading={loading}>Login</Button>
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
