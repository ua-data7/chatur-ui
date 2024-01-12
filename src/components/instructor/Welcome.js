import * as React from "react";

import Link from "next/link";

import Navigation, { NAV_LINKS } from "./Navigation";
import * as Layout from "./Layout";

import { Button, Typography } from "@mui/joy";

export default function Welcome() {
    return (
        <Layout.Root>
            <Layout.SideNav>
                <Navigation selected={NAV_LINKS.WELCOME} />
            </Layout.SideNav>
            <Layout.Main>
                <Typography level="title-lg">
                    Welcome to Chatur, your new TA!
                </Typography>
                <Typography level="body-md">
                    Chatur is an AI chat bot.
                </Typography>
                <Button component={Link} href="/instructor/classes">
                    Add a Class to Get Started!
                </Button>
            </Layout.Main>
        </Layout.Root>
    );
}
