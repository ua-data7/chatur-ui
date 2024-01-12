import * as React from "react";

import Navigation, { NAV_LINKS } from "./Navigation";
import * as Layout from "./Layout";

import { Typography } from "@mui/joy";

export default function Files() {
    return (
        <Layout.Root>
            <Layout.SideNav>
                <Navigation selected={NAV_LINKS.FILES} />
            </Layout.SideNav>
            <Layout.Main>
                <Typography level="title-lg">Manage Files</Typography>
            </Layout.Main>
        </Layout.Root>
    );
}
