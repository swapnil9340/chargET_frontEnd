import Slider from "@/component/sidebar/slider";
import React from "react";
import styled from "../styles/style.module.scss"
export default function layout({ children }) {
    return (
        <div className="container-fluid d-flex">
         
                <Slider></Slider>
            
            <div className="w-100"><main className={styled.layout}>{children}</main></div>
            <div className="col-2 border">leftbar</div>
        </div>
    )
}
