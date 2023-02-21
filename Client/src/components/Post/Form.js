import * as React from "react";
import TextField from "@mui/material/TextField";

export default function Form({ placeholder, sx, value, onChange, require }) {
  return (
    <div>
      <TextField
        sx={sx}
        id="outlined-textarea"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        require={require}
        multiline
      />
    </div>
  );
}
