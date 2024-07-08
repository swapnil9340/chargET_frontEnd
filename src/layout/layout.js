import Slider from "@/component/sidebar/slider";
import React from "react";

export default function layout({ children }) {
    return (
        <div className="container-fluid d-flex">
            <div className=" border">
                <Slider></Slider>
            </div>
            <div className="w-100 border"><main>{children}</main></div>
            <div className="col-2 border">leftbar</div>
        </div>
    )
}

