import React, { useEffect, useState } from "react";
import './Settings.scss'
import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  MenuItem,
  Select,
  FormControl,
  Button,
  Alert,
} from "@mui/material";
import CustomSwitch from "../../components/common/toggle/Toggle";

export default function Settings() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNotificationsChange = (event) => {
    setNotificationsEnabled(event.target.checked);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleSaveSettings = () => {
    setSubmitted(true);
  };

  return (
    <Box className="settings-main-container" sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <Typography variant="h6" component="h2" gutterBottom>
          Account Information
        </Typography>
        <TextField
          label="Username"
          value={username}
          onChange={handleUsernameChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          margin="normal"
        />
        <Typography variant="h6" component="h2" gutterBottom>
          Notifications
        </Typography>
        <FormControlLabel
          control={
            <CustomSwitch
              checked={notificationsEnabled}
              onChange={handleNotificationsChange}
              label="notifications"
            />
          }
          label="Enable Notifications"
        />
        <Typography variant="h6" component="h2" gutterBottom>
          Appearance
        </Typography>
        <FormControl fullWidth margin="normal">
          <Select
            labelId="theme-select-label"
            value={theme}
            onChange={handleThemeChange}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: "#0d2131",
                  color: "#C8CACC",
                  "& .MuiMenuItem-root": {
                    padding: 2,
                  },
                  "& .Mui-selected": {
                    bgcolor: "#152b3c",
                    color: "#C8CACC",
                  },
                },
              },
            }}
          >
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
          </Select>
        </FormControl>
        <Box mt={2}>
          <Button
            variant="contained"
            onClick={handleSaveSettings}
            sx={{
              backgroundColor: "#41EAD4",
              color: "#011627",
              "&:hover": { backgroundColor: "#41EAD4", opacity: 0.9 },
            }}
          >
            Save Settings
          </Button>
          {submitted && (
            <Alert sx={{ my: "1rem" }} severity="success">
              Settings successfully saved
            </Alert>
          )}
        </Box>
      </Box>
    </Box>
  );
}
