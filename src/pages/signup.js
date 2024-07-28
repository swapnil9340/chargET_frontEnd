import React from 'react'
import Styles from '@/styles/style.module.scss'
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
// const useStyles = makeStyles({
//   inputStyleLogin: {
//     width: '100%',
//     '& .MuiInputBase-root': {
//       padding: '8px 8px',
//       border: '1px solid #ededed',
//       borderRadius: '100px',
//       backgroundColor: '#ffffff',
//       color: '#929292',
//       fontSize: '16px',
//       fontFamily: '"Work Sans", sans-serif',
//       lineHeight: '24px',
//       outline: 'none',
//       marginBottom: '10px',
//     },
//     '& .MuiOutlinedInput-notchedOutline': {
//       borderColor: '#ededed',
//     },
//     '& .MuiInputBase-input': {
//       color: '#929292',
//     },
//   },
// });
const signup = () => {
  // const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  const Submit = async (event) => {

    const data = {
      email: event.email,
      password: event.password
    };
    const url = 'https://ubgfdc54cldffk3t4f3apd7gay0pwdfp.lambda-url.us-east-1.on.aws/?type=user&action=register';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      console.log(response)
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
      <div className={Styles.leftside}>
        <div className={Styles.contentbox}>
          <h2 className={Styles.maintitle}>{`Sign Up`}</h2>
          <h3 className={Styles.subtitle}>{`Create Your account`}</h3>
          <p className={Styles.para}>{`Take the next step`}</p>
          <button className={Styles.loginwithgoolebtn}>{`Continue with Google`}</button>
          <div class="header__center">{`Or`}</div>

          <form onSubmit={handleSubmit(Submit)}>
            <input type='email' {...register('email', { required: true })} placeholder='Email' className={Styles.inputstylelogin} />
            {errors.email && <p>email is required.</p>}
            <TextField
                 type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              variant="outlined"
              fullWidth
              // className={classes.inputStyleLogin}
              sx={{
                width: '100%',
                '& .MuiInputBase-root': {
                  height:"48px",
                  // padding: '8px 8px',
                  borderRadius: '100px',
                  backgroundColor: '#ffffff',
                  color: '#929292',
                  fontSize: '16px',
                  fontFamily: '"Work Sans", sans-serif',
                  // lineHeight: '24px',
                  outline: 'none',
                  // marginBottom: '10px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& .MuiInputBase-input': {
                  color: '#929292',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'black', // Customize placeholder color
                },
              }}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
                },
                validate: {
                  hasNumber: (value) =>
                    /\d/.test(value) || 'Password must contain at least one number',
                  hasUpperCase: (value) =>
                    /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter',
                  hasSpecialChar: (value) =>
                    /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'Password must contain at least one special character',
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{ endAdornment:
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff color='red'/> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }}
            />

            <button type='submit' className={Styles.loginsubmitbtn}>{`Sign Up`}</button>
          </form>
          <Link href={'/login'}> <h4 className={Styles.pagecahngebtn}>{`Already have a account? Log In`}</h4></Link>
        </div>
      </div>
      <div className={Styles.rightside}>

      </div>
    </div>
  )
}
signup.layout = "layout1"
export default signup