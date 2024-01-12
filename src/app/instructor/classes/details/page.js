"use client";
import * as React from "react";
import Navigation, { NAV_LINKS } from "../../../../components/instructor/Navigation";
import * as Layout from "../../../../components/instructor/Layout";
import Link from "next/link";
import { Box, Grid, Select, Option, Button, Input, FormControl, FormHelperText, FormLabel, Typography } from "@mui/joy/";
import StudentList from "@/components/instructor/ManageClasses/StudentList";

export default function Details() {

  const SelectModel = () => {
    return (
      <FormControl sx={{ width: '100%' }}>
        <FormLabel id="select-field-demo-label" htmlFor="select-field-demo-button">
          Model
        </FormLabel>
        <Select defaultValue="privateGPT">
          <Option value="privateGPT">PrivateGPT</Option>
          <Option value="mistralAi">Mistral AI</Option>
          <Option value="ollama">OLLAMA</Option>
        </Select>
        <FormHelperText>
          Select perferred language model
        </FormHelperText>
      </FormControl>
    );
  }
  return (
    <Layout.Root>
      <Layout.SideNav>
        <Navigation selected={NAV_LINKS.CLASSES} />
      </Layout.SideNav>
      <Layout.Main>
        <Box component="main" className="MainContent" sx={{ flex: 1 }}>
          <Typography level="title-lg">Class Details</Typography>
          <Grid m={2} container direction={'row'} spacing={2}>
            <Grid>
              <Link href="/instructor/classes"><Button variant="outlined">Back</Button></Link>
            </Grid>
            <Grid>
              <Link href="/instructor/classes"><Button>Save Changes</Button></Link>
            </Grid>
          </Grid>
          <Grid m={2} container direction={'column'} spacing={2}>
            <Grid>
              <FormControl sx={{ width: '100%' }}>
                <FormLabel>
                  Class Name
                </FormLabel>
                <Input placeholder="RNR 355" />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl sx={{ width: '100%' }}>
                <FormLabel>
                  Class Details
                </FormLabel>
                <Input placeholder="Introduction to Machine Learning" />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl sx={{ width: '100%' }}>
                <FormLabel>
                  Class Note
                </FormLabel>
                <Input placeholder="Tue/Thurs 10am-12pm" />
                <FormHelperText>
                  Could place the schedule here
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid>
              <SelectModel />
            </Grid>
            <Grid>
              <FormControl sx={{ width: '100%' }}>
                <FormLabel>
                  Students that currently have access (30)
                </FormLabel>
                <StudentList />
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Layout.Main>
    </Layout.Root>
  );
}
