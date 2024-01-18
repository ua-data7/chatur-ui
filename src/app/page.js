"use client";

import { Button, Container, Stack, Typography } from "@mui/joy";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Container
        sx={{
          pt: 12,
          alignItems: "center",
        }}
      >
        <Stack spacing={1} alignItems={"center"}>
          <Image src="/images/chat-cactus.png" width={283} height={245} alt="Cactus chatbot" priority/>
          <Typography
            level="h1"
            fontWeight="xl"
            fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
          >
            Chatur Classroom Chatbot
          </Typography>
          <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
            Your AI Study Buddy
          </Typography>
        </Stack>
        <Stack spacing={4} alignItems={"center"} mt={8}>
          <Stack direction={"row"} spacing={3}>
            <Link href="/student">
              <Button size="lg">Student View</Button>
            </Link>
            <Link href="/instructor">
              <Button size="lg" variant="soft">
                Instructor View
              </Button>
            </Link>
          </Stack>
          <Stack pt={16} direction={"row"} spacing={10}>
            <Image src="/images/dsi-logo.svg" width={300} height={57} alt="Data Science Institute logo"/>
            <Image src="/images/cyverse.png" width={214} height={47} alt="Cyverse logo"/>
            <Image src="/images/uarizona-logo.png" width={214} height={51} alt="University of Arizona logo"/>
          </Stack>
        </Stack>
      </Container>
    </main>
  );
}
