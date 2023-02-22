import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDown({ sx, setStack, stack, displayEmpty }) {
  const handleChange = event => {
    setStack([event.target.value]);
  };

  return (
    <div>
      <FormControl sx={sx}>
        <Select value={stack} onChange={handleChange} displayEmpty={displayEmpty}>
          <MenuItem value="">
            <span className="text-gray-400 text-[15px]">기술 선택</span>
          </MenuItem>
          <MenuItem value={"Javascript"}>Javascript</MenuItem>
          <MenuItem value={"Typescript"}>Typescript</MenuItem>
          <MenuItem value={"React"}>React</MenuItem>
          <MenuItem value={"Java"}>Java</MenuItem>
          <MenuItem value={"Spring"}>Spring</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
