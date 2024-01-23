import * as React from "react";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { useSelectedCourse } from "@/contexts/CourseContext";
import { toggleSidebar } from "../../utils";

export default function MessagesPaneHeader(props) {
  const { selectedCourse } = useSelectedCourse();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.body",
      }}
      py={{ xs: 1, md: 1 }}
      px={{ xs: 1, md: 1 }}
    >
      <Stack direction="row" spacing={{ xs: 1, md: 2 }} alignItems="center">
        <IconButton
          variant="outlined"
          color="neutral"
          size="sm"
          sx={{
            display: { xs: "inline-flex", sm: "none" },
          }}
          onClick={() => toggleSidebar()}
        >
          <MenuRoundedIcon />
        </IconButton>
        <div>
          <Typography fontWeight="lg" fontSize="md" component="h2" noWrap>
            {selectedCourse.id}: {selectedCourse.name}
          </Typography>
        </div>
      </Stack>
      <Stack spacing={1} direction="row" alignItems="center">
        <IconButton size="sm" variant="plain" color="neutral">
          <MoreVertRoundedIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}
