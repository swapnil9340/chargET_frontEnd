import React from "react";
import { Grid, Box } from "@mui/material";
import Slider from "@/component/sidebar/slider";
import styled from "../styles/style.module.scss";
export default function Layout({ children }) {
    return (
                <div>
                    <Slider />
                    <main className={styled.layout}>{children}</main>
                </div>       
    );
}
