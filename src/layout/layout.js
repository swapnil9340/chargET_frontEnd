import React from "react";
import { Grid, Box } from "@mui/material";
import Slider from "@/component/sidebar/slider";
import styled from "../styles/style.module.scss";

export default function Layout({ children }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '100vh' }}>
            {/* Sidebar with fixed width */}
            <Box sx={{ width: { xs: '100%', md: '130px' }, flexShrink: 0 }}>
                <Slider />
            </Box>

            {/* Main content and Leftbar in 60-40 split on larger screens */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, flexGrow: 1 }}>
                {/* Main content - 60% of remaining space */}
                <Box sx={{ width: { xs: '100%', md: '60%' }, padding: 2 }}>
                    <main className={styled.layout}>{children}</main>
                </Box>

                {/* Leftbar - 40% of remaining space */}
                <Box sx={{ width: { xs: '100%', md: '40%' }, padding: 2, borderLeft: { md: '1px solid #ccc' } }}>
                    Leftbar
                </Box>
            </Box>
        </Box>
    );
}
