import * as React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import Drawer from "@mui/joy/Drawer";
import ModalClose from "@mui/joy/ModalClose";
import DialogTitle from "@mui/joy/DialogTitle";
import Link from "@mui/joy/Link";
import Avatar from "@mui/joy/Avatar";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ColorSchemeToggle from "../chat/ColorSchemeToggle";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);

  // Determine if the current route matches the button's destination
  const [open, setOpen] = React.useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between",
      }}
    >
      <Stack
        direction="row"
        justifyContent="end"
        alignItems="center"
        spacing={3}
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <Link href="/" overlay underline="none">
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar src="/images/cactuar-avatar.png" size="sm" />
            {/* <Typography level="h3">Chatur</Typography> */}
          </Stack>
        </Link>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Button
            variant="plain"
            color="neutral"
            aria-pressed={pathname === "/"}
            component="a"
            href="/"
            size="sm"
            sx={{ alignSelf: "center" }}
          >
            Home
          </Button>
          <Button
            variant="plain"
            color="neutral"
            aria-pressed={pathname === "/about"}
            component="a"
            href="/about"
            size="sm"
            sx={{ alignSelf: "center" }}
          >
            About
          </Button>
          <Button
            variant="plain"
            color="neutral"
            aria-pressed={pathname === "/team"}
            component="a"
            href="/team"
            size="sm"
            sx={{ alignSelf: "center" }}
          >
            Team
          </Button>
        </Stack>
      </Stack>
      <Box sx={{ display: { xs: "inline-flex", sm: "none" } }}>
        <IconButton
          variant="plain"
          color="neutral"
          onClick={() => setOpen(true)}
        >
          <MenuRoundedIcon />
        </IconButton>
        <Drawer
          sx={{ display: { xs: "inline-flex", sm: "none" } }}
          open={open}
          onClose={() => setOpen(false)}
        >
          <ModalClose />
          <DialogTitle>Acme Co.</DialogTitle>
          <Box sx={{ px: 1 }}>{/* <TeamNav /> */}</Box>
        </Drawer>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1.5,
          alignItems: "center",
        }}
      >
        <ColorSchemeToggle />
      </Box>
    </Box>
  );
}
