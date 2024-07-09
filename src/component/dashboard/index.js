import React from "react";
import style from "../../styles/style.module.scss"
import TextField from '@mui/material/TextField';
import useStyles from '@/styles/customStyles';
export default function Home() {
    const classes = useStyles();
return(
    <div className={style.Searchouter}>
         <TextField
      className={classes.customTextField}
      variant="outlined"
    //   {...props}
    /> 
    </div>
)
}