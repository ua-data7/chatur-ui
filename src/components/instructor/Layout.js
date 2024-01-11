import * as React from "react";
import Box, { BoxProps } from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Navigation from "./Navigation";

function SideNav(props) {
    return (
        <Box
            component="nav"
            className="Navigation"
            {...props}
            sx={[
                {
                    p: 2,
                    bgcolor: "background.surface",
                    borderRight: "1px solid",
                    borderColor: "divider",
                    display: {
                        xs: "none",
                        sm: "initial",
                    },
                },
                ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
            ]}
        />
    );
}

export default function Root(props) {
    return (
        <Box
            {...props}
            sx={[
                {
                    bgcolor: "background.appBody",
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "minmax(64px, 200px) minmax(450px, 1fr)",
                        md: "minmax(160px, 300px) minmax(300px, 500px) minmax(500px, 1fr)",
                    },
                    gridTemplateRows: "64px 1fr",
                    minHeight: "100vh",
                },
                ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
            ]}
        >
            <SideNav>
                <Navigation />
            </SideNav>
        </Box>
    );
}
