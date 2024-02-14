import * as React from "react";

import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

import Lottie from "lottie-react";
import animationData from "@/animations/loading-dots";

const LoadingDots = () => {
  return <Lottie animationData={animationData} style={{ width: 50 }} />;
};

export default function PendingMessageBubble({ sender }) {
  return (
    <Box sx={{ maxWidth: "60%", minWidth: "auto" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: 0.25 }}
      >
        <Typography level="body-xs">Chatur</Typography>
      </Stack>

      <Box sx={{ position: "relative" }}>
        <Sheet
          color={"neutral"}
          variant={"soft"}
          sx={{
            px: 2,
            borderRadius: "lg",
            borderTopRightRadius: "lg",
            borderTopLeftRadius: 0,
            backgroundColor: "background.body",
          }}
        >
          <LoadingDots />
        </Sheet>
      </Box>
    </Box>
  );
}
