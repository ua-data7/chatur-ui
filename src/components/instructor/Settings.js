import * as React from "react";

import Navigation, { NAV_LINKS } from "./Navigation";
import * as Layout from "./Layout";

import { Typography } from "@mui/joy";

export default function Settings() {
    return (
        <Layout.Root>
            <Layout.SideNav>
                <Navigation selected={NAV_LINKS.SETTINGS} />
            </Layout.SideNav>
            <Layout.Main>
                <Typography level="title-lg">Settings</Typography>
            </Layout.Main>
        </Layout.Root>
    );
}
