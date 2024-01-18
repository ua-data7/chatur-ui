import * as React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Sheet from "@mui/joy/Sheet";
import { Typography } from "@mui/joy";

export default function StudentList() {
  // Generates random names and usernames for demo purposes
  const generateRandomName = () => {
    const firstNames = [
      "John",
      "Jane",
      "Michael",
      "Emily",
      "David",
      "Sarah",
      "Robert",
      "Ashley",
      "Chris",
      "Jessica",
    ];
    const lastNames = [
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Carey",
      "Miller",
      "Davis",
      "Garcia",
      "Rodriguez",
    ];
    const randomFirstName =
      firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName =
      lastNames[Math.floor(Math.random() * lastNames.length)];
    const username = `${randomFirstName
      .charAt(0)
      .toLowerCase()}${randomLastName.toLowerCase()}`;
    return {
      firstName: randomFirstName,
      lastName: randomLastName,
      username: username,
    };
  };

  const people = [...Array(30)].map((_, index) => generateRandomName());

  return (
    <Sheet
      variant="outlined"
      sx={{
        width: "100%",
        maxHeight: 300,
        overflow: "auto",
        borderRadius: "sm",
      }}
    >
      <List>
        {people.map((person, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <Typography>{person.username}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Sheet>
  );
}
