// src/styles/customStyles.js
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  customTextField: {
    backgroundColor: theme.palette.background.default,
    '& .MuiInputBase-root': {
      backgroundColor: '#f0f0f0',  // Set your desired background color here
    },
  },
}));

export default useStyles;
