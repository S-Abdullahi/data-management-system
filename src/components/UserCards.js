import { Person } from "@mui/icons-material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import peopleVerified from "../assets/peopleVerified.svg";
import peopleRejected from "../assets/peopleRejected.svg";
import peoplePendingVerification from "../assets/peoplePendingVerification.svg";
import React from "react";

const instanceDetails = [
  {
    icon: peopleVerified,
    title: "Total Instance",
    value: 12,
  },
  {
    icon: peoplePendingVerification,
    title: "Total Instance",
    value: 12,
  },
  {
    icon: peopleRejected,
    title: "Total Instance",
    value: 12,
  },
  {
    icon: peopleRejected,
    title: "Total Instance",
    value: 12,
  },
];

const UserCards = () => {
  return (
    <Stack direction="row" justifyContent="space-between" spacing={4} sx={{}}>
      {instanceDetails.map((detail, index) => {
        const { icon, title, value } = detail;
        return (
          <Card sx={{ flex: "1 1 0" }} variant="outlined">
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                alt="people verified"
                src={icon}
                sx={{ marginRight: "10px" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "14px" }}>{title}</Typography>
                <Typography sx={{ fontSize: "18px", color: "#9DA0A7" }}>
                  {value}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
};

export default UserCards;
