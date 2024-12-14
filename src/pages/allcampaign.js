import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import styled from '@/styles/style.module.scss';
import Header from '@/component/Header/Searchbar';
const data = {
  today: [
    {
      campaignName: "Campaign 1 - Marketing",
      date: "Today",
      status: "Inactive",
      live: false,
      startDate: "12/01/2024",
      endDate: "12/01/2024",
    },
    {
        campaignName: "Campaign 1 - Marketing",
        date: "Today",
        status: "Inactive",
        live: false,
        startDate: "12/01/2024",
        endDate: "12/01/2024",
      },
      
    {
      campaignName: "Campaign 2",
      date: "Today",
      status: "Active",
      live: true,
      startDate: "12/01/2024",
      endDate: "12/01/2024",
    },
    {
      campaignName: "Campaign 3",
      date: "Today",
      status: "Active",
      live: true,
      startDate: "12/01/2024",
      endDate: "12/01/2024",
    },
  ],
  tomorrow: [
    {
      campaignName: "Brand proposal",
      date: "Tomorrow",
      status: "Draft",
      live: true,
      startDate: "12/01/2024",
      endDate: "12/01/2024",
      action: "Pay Now",
    },
    {
      campaignName: "Social media review",
      date: "Tomorrow",
      status: "Approved",
      live: true,
      startDate: "12/01/2024",
      endDate: "12/01/2024",
    },
    {
      campaignName: "Promotions",
      date: "Tomorrow",
      status: "Declined",
      live: true,
      startDate: "12/01/2024",
      endDate: "12/01/2024",
    },
  ],
};

const CampaignTable = () => {
  const renderStatus = (status) => {
    switch (status) {
      case "Inactive":
        return <Typography color="text.secondary" variant="body2">Inactive</Typography>;
      case "Active":
        return <Typography color="warning.main" variant="body2">Active</Typography>;
      case "Draft":
        return <Typography color="grey.500" variant="body2">Draft</Typography>;
      case "Approved":
        return <Typography color="success.main" variant="body2">Approved</Typography>;
      case "Declined":
        return <Typography color="error.main" variant="body2">Declined</Typography>;
      default:
        return status;
    }
  };

  return (
<>
<div>
    <Header />
   
    </div>
    <Box sx={{ p: 4, display: "flex", flexDirection: "column", gap: 4 }}>
      {["today", "tomorrow"].map((timeFrame) => (
        <Box key={timeFrame} sx={{ mb: 4, maxHeight: "300px", overflow: "auto" }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            {timeFrame.charAt(0).toUpperCase() + timeFrame.slice(1)}
          </Typography>
          <TableContainer component={Paper}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Campaign</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Live</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data[timeFrame].map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.campaignName}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{renderStatus(row.status)}</TableCell>
                    <TableCell>
                      <Switch checked={row.live} />
                    </TableCell>
                    <TableCell>{row.startDate}</TableCell>
                    <TableCell>{row.endDate}</TableCell>
                    <TableCell>
                      {row.action ? (
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ textTransform: "none" }}
                        >
                          {row.action}
                        </Button>
                      ) : (
                        <Typography>&raquo;</Typography>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}
    </Box>
</>
  );
};
CampaignTable.layout = "layout"
export default CampaignTable;
