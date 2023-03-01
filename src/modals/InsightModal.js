import {
  Drawer,
  Typography,
  Box,
  Paper,
  IconButton,
  Stack,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import peopleVerified from "../assets/peopleVerified.svg";
import peopleRejected from "../assets/peopleRejected.svg";
import peoplePendingVerification from "../assets/peoplePendingVerification.svg";

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

const InsightModal = () => {
  return (
    <Drawer anchor="right" open="true">
      <Box sx={{ width: "405px" }}>
        <Paper
          variant="outlined"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Typography variant="body" sx={{ fontSize: "18px", fontWeight: 500 }}>
            Insight
          </Typography>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Paper>
        <Stack
          direction="column"
          //   justifyContent="space-between"
          spacing={2}
          sx={{ padding: 5 }}
        >
          {instanceDetails.map((detail, index) => {
            const { icon, title, value } = detail;
            return (
              <Card sx={{}} variant="outlined">
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
      </Box>
    </Drawer>
  );
};

export default InsightModal;
