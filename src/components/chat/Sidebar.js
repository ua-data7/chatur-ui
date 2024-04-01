import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Sheet from "@mui/joy/Sheet";
import Skeleton from "@mui/joy/Skeleton";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { Link } from "@mui/joy";

import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import ColorSchemeToggle from "./ColorSchemeToggle";
import { closeSidebar } from "../../utils/layoutUtils";

import { useCourses } from "@/contexts/courses/CourseContext";
import { formatCourseId } from "@/utils/courseUtils";
import { useUser } from "@/contexts/user/UserContext";

function Toggler(props) {
  const { defaultExpanded = false, renderToggle, children } = props;
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "0.2s ease",
          "& > *": {
            overflow: "hidden",
          },
        }}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

// Skeleton loader for courses
const renderCourseSkeletons = () => {
  return Array.from(new Array(3)).map((_, index) => (
    <Stack key={index} spacing={1} m={1}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={12}
        animation="wave"
      />
      <Skeleton
        variant="rectangular"
        width="80%"
        height={12}
        animation="wave"
      />
    </Stack>
  ));
};

export default function Sidebar() {
  const { selectedCourse, setSelectedCourse, courses, loading, error } =
    useCourses();
  const { user, userLoading, userError } = useUser();

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "280px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "280px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Link href="/" overlay underline="none">
          {/* <Avatar src="/images/cactuar-avatar.png" size="sm" /> */}
          <Typography level="h3">Chatur</Typography>
        </Link>

        <ColorSchemeToggle sx={{ ml: "auto" }} />
      </Box>
      <Divider />
      <Typography level="title-md">My Courses</Typography>
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: { gap: 1.5 },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}
        >
          {loading
            ? renderCourseSkeletons()
            : courses.map((course) => (
                <ListItem key={course.id}>
                  <ListItemButton
                    onClick={() => setSelectedCourse(course)}
                    selected={course.id === selectedCourse?.id}
                  >
                    <ListItemContent>
                      <Typography level="title-sm">{course.name}</Typography>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
              ))}
        </List>
        {/* <List
          size="sm"
          sx={{
            mt: "auto",
            flexGrow: 0,
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
            "--List-gap": "8px",
            mb: 2,
          }}
        >
          <ListItem>
            <ListItemButton>
              <SupportRoundedIcon />
              Support
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <SettingsRoundedIcon />
              Account
            </ListItemButton>
          </ListItem>
        </List> */}
      </Box>
      <img
        src="/images/uarizona-logo.png"
        alt="Description of the image"
        width={"175px"}
      />
      <Divider />
      {!userLoading && user && (
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Avatar variant="solid" sx={{ backgroundColor: "success.400" }}>
            {user.given_name?.charAt(0)}
            {user.family_name?.charAt(0)}
          </Avatar>
          <Box sx={{ minWidth: 0, flex: 1, marginLeft: 0.5 }}>
            <Typography level="title-sm">{user.name}</Typography>
            <Typography level="body-xs">{user.email}</Typography>
          </Box>
          <IconButton size="sm" variant="plain" color="neutral">
            <LogoutRoundedIcon />
          </IconButton>
        </Box>
      )}{" "}
      {userLoading && (
        <Stack direction="row" spacing={1}>
          <Skeleton variant="circular" width={40} height={40} />
          <Box>
            <Skeleton animation="wave" variant="text" sx={{ width: 120 }} />
            <Skeleton
              animation="wave"
              variant="text"
              level="body-xs"
              sx={{ width: 175 }}
            />
          </Box>
        </Stack>
      )}
    </Sheet>
  );
}
