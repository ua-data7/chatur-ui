import * as React from "react";

import Navigation, { NAV_LINKS } from "../Navigation";
import * as Layout from "../Layout";

import { Typography, Box, Grid, Button } from "@mui/joy";
import ClassCard from "./ClassCard";
import Link from "next/link";

export default function Classes() {
  return (
    <Layout.Root>
      <Layout.SideNav>
        <Navigation selected={NAV_LINKS.CLASSES} />
      </Layout.SideNav>
      <Layout.Main>
        <Typography level="title-lg">Manage Classes</Typography>
        <Box m={4}>
          <Grid
            container
            spacing={2}
            sx={{ flexGrow: 1 }}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
          >
            <Grid>
              <Button>Delete Class</Button>
            </Grid>
            <Grid>
              <Button>Add Class</Button>
            </Grid>
            <Grid>
              <Link href="/instructor/classes/details">
                <Button>Edit Class</Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Box m={4}>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid>
              <Link
                style={{ textDecoration: "none" }}
                href="/instructor/classes/details"
              >
                <ClassCard
                  studentCount={30}
                  courseName={"RNR 355"}
                  courseDescription={"Into to Machine Learning"}
                  courseNote={"Tue/Thurs 10am-12pm"}
                  model={"privateGPT"}
                />
              </Link>
            </Grid>
            <Grid>
              <Link
                style={{ textDecoration: "none" }}
                href="/instructor/classes/details"
              >
                <ClassCard
                  studentCount={18}
                  courseName={"CNC 353"}
                  courseDescription={"Into to Machine Learning"}
                  courseNote={"Online"}
                  model={"Mistral"}
                />
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Layout.Main>
    </Layout.Root>
  );
}
