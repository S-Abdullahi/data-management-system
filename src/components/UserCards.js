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

const UserCards = () => {
  return (
    <Stack direction="row" justifyContent="space-between" spacing={4} sx={{}}>
      <Card sx={{ flex: "1 1 0" }} variant="outlined">
        <CardContent sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="people verified"
            src={peopleVerified}
            sx={{ marginRight: "10px" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>Total Instance</Typography>
            <Typography sx={{ fontSize: "18px", color: "#9DA0A7" }}>
              12
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ flex: "1 1 0" }} variant="outlined">
        <CardContent sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="people pending verification"
            src={peoplePendingVerification}
            sx={{ marginRight: "10px" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "14px", marginBottom: "5px" }}>
              Active
            </Typography>
            <Typography sx={{ fontSize: "18px", color: "#9DA0A7" }}>
              12
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ flex: "1 1 0" }} variant="outlined">
        <CardContent sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="people rejected"
            src={peopleRejected}
            sx={{ marginRight: "10px" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "14px", marginBottom: "5px" }}>
              Suspended
            </Typography>
            <Typography sx={{ fontSize: "18px", color: "#9DA0A7" }}>
              12
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ flex: "1 1 0" }} variant="outlined">
        <CardContent sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="people rejected"
            src={peopleRejected}
            sx={{ marginRight: "10px" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "14px", marginBottom: "5px" }}>
              Deactivated
            </Typography>
            <Typography sx={{ fontSize: "18px", color: "#9DA0A7" }}>
              12
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default UserCards;
