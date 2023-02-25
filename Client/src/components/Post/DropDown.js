import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function DropDown({ items, ...props }) {
  return (
    <Select {...props}>
      <MenuItem>
        <span className="text-gray-400 text-[15px]">선택</span>
      </MenuItem>
      {items?.map((item, i) => (
        <MenuItem key={i} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
}
