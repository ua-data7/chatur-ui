"use client";
import * as React from "react";
import Navigation, { NAV_LINKS } from "../../../../components/instructor/Navigation";
import * as Layout from "../../../../components/instructor/Layout";
import Link from "next/link";
import { Box,Button }from "@mui/joy/";

export default function Instructor() {
    return (
      <Layout.Root>
      <Layout.SideNav>
        <Navigation selected={NAV_LINKS.CLASSES} />
      </Layout.SideNav>
      <Layout.Main>
            <Box sx={{ display: "flex", minHeight: "100dvh" }}>
                <Box component="main" className="MainContent" sx={{ flex: 1 }}>
                    <Link href="/instructor/classes"><Button>Back</Button></Link>
                </Box>
            </Box>
        </Layout.Main>
        </Layout.Root>
    );
}
