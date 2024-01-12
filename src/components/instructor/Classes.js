import * as React from "react";

import Navigation, { NAV_LINKS } from "./Navigation";
import * as Layout from "./Layout";

import { Typography } from "@mui/joy";

export default function Classes() {
    return (
        <Layout.Root>
            <Layout.SideNav>
                <Navigation selected={NAV_LINKS.CLASSES} />
            </Layout.SideNav>
            <Layout.Main>
                <Typography level="title-lg">Manage Classes</Typography>
            </Layout.Main>
        </Layout.Root>
    );
}
