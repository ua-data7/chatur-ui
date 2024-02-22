"use client";

import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/joy";

const teamMembers = [
  { name: "Ajay Perumbeti", photoUrl: "" },
  { name: "Amy Johnson", photoUrl: "" },
  { name: "Austin Medina", photoUrl: "" },
  { name: "Brenda Huppenthal", photoUrl: "" },
  {
    name: "Carlos Lizarraga",
    photoUrl:
      "https://datascience.arizona.edu/sites/default/files/styles/az_card_image/public/2023-03/202206448_lizarraga_carlos-5481-Edit.jpg?h=cfca3f1f&itok=6QLMgejE",
  },
  { name: "Edwin Skidmore", photoUrl: "" },
  {
    name: "Enrique Noriega",
    photoUrl:
      "https://ca.slack-edge.com/T06LQVC4U-U040V8JR4RE-e255ee352267-512",
  },
  {
    name: "Hagan Franks",
    photoUrl:
      "https://datascience.arizona.edu/sites/default/files/styles/az_card_image/public/2022-05/202108337_franks_hagan.jpg?itok=9qXlDBd3",
  },
  {
    name: "Illyoung Choi",
    photoUrl: "https://ca.slack-edge.com/T065C5R5K-U21A98YM6-g77c3878f082-512",
  },
  {
    name: "Jeff Gillan",
    photoUrl:
      "https://datascience.arizona.edu/sites/default/files/styles/az_card_image/public/2023-12/Jeff%20Gillan%20F23_R4R.jpg?itok=qhmDkxwt",
  },
  { name: "Jeremy Frady", photoUrl: "" },
  {
    name: "Jim Davis",
    photoUrl:
      "https://datascience.arizona.edu/sites/default/files/styles/az_card_image/public/2022-05/202108337_davis_jim.jpg?itok=asy9x_GT",
  },
  { name: "John Wregglesworth", photoUrl: "" },
  {
    name: "Maliaca Oxnam",
    photoUrl:
      "https://datascience.arizona.edu/sites/default/files/styles/az_card_image/public/2023-03/202206448_oxnam_maliaca-5417-Edit_1.jpg?h=18befb10&itok=RNgveaTA",
  },
  {
    name: "Mariah Wall",
    photoUrl: "https://ca.slack-edge.com/T065C5R5K-U081H7RHN-fec28b1bb9a5-512",
  },
  {
    name: "Megh Krishnaswamy",
    photoUrl:
      "https://ca.slack-edge.com/T06LQVC4U-U05MFUST01Z-ae37c6775e42-512",
  },
  {
    name: "Michele Cosi",
    photoUrl:
      "https://datascience.arizona.edu/sites/default/files/styles/az_card_image/public/2023-10/2023_Michele_Cosi-7.jpg?itok=VJ7knEGD",
  },
  {
    name: "Michelle Yung",
    photoUrl:
      "https://datascience.arizona.edu/sites/default/files/styles/az_card_image/public/2022-05/202108337_yung_michelle-6-Edit_0.jpg?itok=-rO5dPba",
  },
  {
    name: "Mithun Paul",
    photoUrl:
      "https://ca.slack-edge.com/T06LQVC4U-U05RWC34VBL-8999bc8338e7-512",
  },
  {
    name: "Nick Eddy",
    photoUrl:
      "https://datascience.arizona.edu/sites/default/files/styles/az_card_image/public/2022-06/202108337_eddy_nick_1.jpg?itok=Vdu33JiT",
  },
  {
    name: "Nirav Merchant",
    photoUrl:
      "https://datascience.arizona.edu/sites/default/files/styles/az_card_image/public/2022-05/202108337_merchant_nirav-5-Edit.jpg?itok=WYGqJQmR",
  },
  { name: "Paul Sarando", photoUrl: "" },
  {
    name: "Rudy Salcido",
    photoUrl:
      "https://datascience.arizona.edu/sites/default/files/styles/az_card_image/public/2023-03/202206448_salcido_rudy-5493-Edit.jpg?h=c573fba0&itok=5uh3qceQ",
  },
  {
    name: "Sarah Roberts",
    photoUrl: "https://ca.slack-edge.com/T065C5R5K-U07MW6656-5ba04b62c338-512",
  },
  { name: "Sean Davey", photoUrl: "" },
  {
    name: "Tina Johnson",
    photoUrl:
      "https://ca.slack-edge.com/T06LQVC4U-U030ZSWD69Y-e7dfafe8415c-512",
  },
  {
    name: "Tina Lee",
    photoUrl: "https://ca.slack-edge.com/T065C5R5K-U42TCJGBF-a53665cfa3c5-512",
  },
  {
    name: "Tony Edgin",
    photoUrl: "https://ca.slack-edge.com/T065C5R5K-U07P16E11-1d680328627f-512",
  },
  {
    name: "Tyson Swetnam",
    photoUrl: "https://ca.slack-edge.com/T065C5R5K-U25HF2D8X-ad0ccfac98be-512",
  },
  {
    name: "Urvika Gola",
    photoUrl:
      "https://ca.slack-edge.com/T065C5R5K-U03U8L10P39-43e264c138d2-512",
  },
  { name: "Zhuoyun Xu", photoUrl: "" },
  {
    name: "Zi Deng",
    photoUrl:
      "https://ca.slack-edge.com/T06LQVC4U-U034QTR4A8Y-4bcf5d32c7d7-512",
  },
];

export default function Team() {
  return (
    <Box sx={{ width: "80%", margin: "auto" }} paddingY={16}>
      <Stack spacing={4}>
        <Typography level="h1" sx={{ textAlign: "center" }}>
          Meet the Chatur Team{" "}
        </Typography>
        <Typography level="title-lg" sx={{ textAlign: "center" }}>
          Thanks to everyone who participated in the codeathon!
        </Typography>
        <Grid container spacing={2}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card variant="plain">
                <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
                  <Avatar
                    sx={{ width: "150px", height: "150px", mb: 2 }}
                    src={
                      member.photoUrl
                        ? member.photoUrl
                        : "/images/cactuar-avatar.png"
                    }
                  ></Avatar>
                  <Typography level="title-lg">{member.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}
