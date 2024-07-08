import React, { useState } from "react";

const Sldeslider = () => {
  const [isOpen, setIsOpen] = useState(true );

  console.log(isOpen);

  return (
    <div className={isOpen ? "slid" : "sidebar_head"} >
    <div className="d-flex">
    <div className="option">
               <div className="option12">{`FullScreens`}</div>
               
        </div>
        <div className="closebuttom">
            <img src="Icon.ico"></img>
        </div>
    </div>
  </div>
  );
};

export default Sldeslider;