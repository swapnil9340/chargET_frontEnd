import React, { useState } from "react";
import classes from "../../styles/style.module.scss"
import { IoReorderThreeOutline } from "react-icons/io5";

const Sldeslider = () => {
  const [isOpen, setIsOpen] = useState(true);

  console.log(isOpen);

  return (
    <div className={isOpen ? "slid" : "sidebar_head"} >
      <div className="d-flex">
        <div className="option">
          {isOpen ?  <div className="option12">{`FullScreens`}</div> : <IoReorderThreeOutline  onClick={() => setIsOpen(!isOpen)}/>}
        </div>
     { isOpen &&   <div className="closebuttom" onClick={() => setIsOpen(!isOpen)}>
          <img className={classes.icon} src="icon1.png"></img>
        </div>}
      </div>
    </div>
  );
};

export default Sldeslider;