import * as React from "react";
import TextField from "@mui/material/TextField";

export default function Form({ placeholder, sx }) {
  return (
    <div>
      <TextField sx={sx} id="outlined-textarea" placeholder={placeholder} multiline />
    </div>
  );
}
