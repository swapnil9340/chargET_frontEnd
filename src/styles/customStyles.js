// src/styles/customStyles.js
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  customTextField: {
    backgroundColor: theme.palette.background.default,
    '& .MuiInputBase-root': {
      backgroundColor: '#f0f0f0',  // Set your desired background color here
    },
  },
  mediatabs:{
    "& .MuiTabs-flexContainer":{
      gap:'10px',
      "& .MuiButtonBase-root":{
         border:'1px solid gray',
         borderRadius:'20px',
         padding:'6px 10px',
         fontSize:'12px',
         minHeight:'20px',
         minWidth:'50px',
         "&.Mui-selected":{
            backgroundColor:'#266fd5',
            color:'#fff',
         }
      }
    
    },
    "& .MuiTabs-indicator":{
      display:'none',
    }
  }
}));

export default useStyles;
