// src/styles/customStyles.js
import { BorderBottom } from '@mui/icons-material';
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
  },
  historyList:{
    "& .MuiBox-root":{
       BorderBottom:'0px !important',
    
      '& .MuiTabs-root':{
        border:'none',
        "& .Mui-selected ":{
          color:'#000 !important',
          border:'none',
        },
        "& .MuiButtonBase-root":{
            color: "#9399a2",
            fontSize: '14px',
            fontFamily: "Rubik",
            fontWeight: '600',
            lineHeight: '20px',
            textTransform: 'uppercase',
        },
        "& .MuiTabs-indicator":{
          display:'none',
        }
      }
    }
  },
  addcampaignBtn:{
    width: '214px',
    height: '43px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor:' #202b3b',
    color: '#f5f5f5',
    fontSize: '14px',
    fontFamily: "Rubik",
    fontWeight: '500',
    lineHeight: '20px',
    outline: 'none',
    "&:hover":{
      border:'1px solid #000',
      color:'#000',
      
    }
  },
  customScrollbar: {
    overflowY: 'auto',
    maxHeight: 550,
    '&::-webkit-scrollbar': {
      width: '6px', // Reduced width for minimal appearance
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent', // Invisible track
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(136, 136, 136, 0.3)', // Semi-transparent for low visibility
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'rgba(85, 85, 85, 0.7)', // Slightly more visible on hover
    },
    scrollbarWidth: 'thin', // For Firefox, makes scrollbar thinner
    scrollbarColor: 'rgba(136, 136, 136, 0.3) transparent', // For Firefox, matching the WebKit styling
  },
}));

export default useStyles;
