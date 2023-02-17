import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Buttons({ text, sx, className, onClick, style }) {
  return (
    <Button sx={sx} variant="outlined" size="medium" className={className} onClick={onClick}>
      {text}
    </Button>
  );
}
