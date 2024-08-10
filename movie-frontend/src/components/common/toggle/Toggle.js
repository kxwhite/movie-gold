import React from "react";
import { alpha, styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const ColourSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#41EAD4",
    "&:hover": {
      backgroundColor: alpha("#41EAD4", theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#41EAD4",
  },
}));

export default function CustomSwitch({ label }) {
  return (
    <div>
      <ColourSwitch label={label} defaultChecked />
    </div>
  );
}
