import React from 'react';
import Styles from '@/styles/style.module.scss';
import { useForm } from 'react-hook-form';
import Button from '@/component/inputs/button';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
const Login = () => {
  const router = useRouter()
   const [loading , Setloading] = React.useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const Submit = async (event) => {
    try {
      Setloading(true)
      fetch('https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/?type=user&action=login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: event.email,
          password: event.password
        })
      })
      .then(response => response.json())
      .then(data => {
        Setloading(false)
        const oneHour = 1 / 24; // 1 hour in days
        Cookies.set('ChargeET_UserToken', data.token, { expires: oneHour });
        router.push('/')
      })

      .catch((error) => {
        Setloading(false)
        console.error('Error:', error);
      });
    } catch (error) {
      // Handle error
    }
    // finally{
    //   Setloading(false)
    // }
  };

  return (
    <div className={Styles.accespage}>
      <div className={Styles.rightside}></div>
      <div className={Styles.leftside}>
        <div className={Styles.contentbox}>
          <h2 className={Styles.maintitle}>{`Login to your account`}</h2>

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
                // validate: {
                //   hasNumber: (value) => /\d/.test(value) || 'Password must contain at least one number',
                //   hasUpperCase: (value) =>
                //     /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter',
                //   hasSpecialChar: (value) =>
                //     /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'Password must contain at least one special character',
                // },
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
