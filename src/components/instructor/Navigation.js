import * as React from "react";

import Avatar from "@mui/joy/Avatar";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";

import HomeIcon from "@mui/icons-material/Home";
import LaptopIcon from "@mui/icons-material/Laptop";
import FolderIcon from "@mui/icons-material/Folder";
import SettingsIcon from "@mui/icons-material/Settings";
import StudentViewIcon from "@mui/icons-material/Visibility";

import Link from "next/link";

export const NAV_LINKS = {
  WELCOME: "welcome",
  CLASSES: "classes",
  FILES: "files",
  SETTINGS: "settings",
};

export default function Navigation(props) {
  const { selected } = props;

  return (
    <List
      size="sm"
      sx={{
        "--ListItem-radius": "var(--joy-radius-sm)",
        "--List-gap": "4px",
      }}
    >
      <ListItem nested>
        <ListSubheader>
          <Avatar src="/images/nirav.jpg" />
        </ListSubheader>
        <ListItem>
          <ListItemButton component={Link}
            href="/" selected={selected === NAV_LINKS.WELCOME}>
            <ListItemDecorator>
              <HomeIcon fontSize="small" />
            </ListItemDecorator>
            <ListItemContent>Welcome</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            component={Link}
            href="/instructor/classes"
            selected={selected === NAV_LINKS.CLASSES}
          >
            <ListItemDecorator>
              <LaptopIcon fontSize="small" />
            </ListItemDecorator>
            <ListItemContent>Manage Classes</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            component={Link}
            href="/instructor/files"
            selected={selected === NAV_LINKS.FILES}
          >
            <ListItemDecorator sx={{ color: "neutral.500" }}>
              <FolderIcon fontSize="small" />
            </ListItemDecorator>
            <ListItemContent>Manage Files</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} href="/student">
            <ListItemDecorator sx={{ color: "neutral.500" }}>
              <StudentViewIcon fontSize="small" />
            </ListItemDecorator>
            <ListItemContent>Student View</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            component={Link}
            href="/instructor/settings"
            selected={selected === NAV_LINKS.SETTINGS}
          >
            <ListItemDecorator sx={{ color: "neutral.500" }}>
              <SettingsIcon fontSize="small" />
            </ListItemDecorator>
            <ListItemContent>Settings</ListItemContent>
          </ListItemButton>
        </ListItem>
      </ListItem>
    </List>
  );
}
