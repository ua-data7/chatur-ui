import * as React from "react";

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

export default function Navigation() {
    return (
        <List
            size="sm"
            sx={{
                "--ListItem-radius": "var(--joy-radius-sm)",
                "--List-gap": "4px",
            }}
        >
            <ListItem nested>
                <ListSubheader sx={{ letterSpacing: "2px", fontWeight: "800" }}>
                    <ListItemDecorator>
                        <HomeIcon fontSize="small" />
                    </ListItemDecorator>
                    Welcome
                </ListSubheader>
                <List
                    aria-labelledby="nav-list-browse"
                    sx={{
                        "& .JoyListItemButton-root": { p: "8px" },
                    }}
                >
                    <ListItem>
                        <ListItemButton>
                            <ListItemDecorator>
                                <LaptopIcon fontSize="small" />
                            </ListItemDecorator>
                            <ListItemContent>Manage Classes</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton selected>
                            <ListItemDecorator sx={{ color: "neutral.500" }}>
                                <FolderIcon fontSize="small" />
                            </ListItemDecorator>
                            <ListItemContent>Manage Files</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <Link href="/student">
                            <ListItemButton>
                                <ListItemDecorator
                                    sx={{ color: "neutral.500" }}
                                >
                                    <StudentViewIcon fontSize="small" />
                                </ListItemDecorator>
                                <ListItemContent>Student View</ListItemContent>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemDecorator sx={{ color: "neutral.500" }}>
                                <SettingsIcon fontSize="small" />
                            </ListItemDecorator>
                            <ListItemContent>Settings</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                </List>
            </ListItem>
        </List>
    );
}
