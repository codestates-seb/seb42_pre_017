import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDown({ sx }) {
  const [techStack, setTechStach] = React.useState("");

  const handleChange = event => {
    setTechStach(event.target.value);
  };

  return (
    <div>
      <FormControl sx={sx}>
        <Select value={techStack} onChange={handleChange} displayEmpty>
          <MenuItem value="">
            <em>선택</em>
          </MenuItem>
          <MenuItem value={"Javascript"}>Javascript</MenuItem>
          <MenuItem value={"Typescript"}>Typescript</MenuItem>
          <MenuItem value={"React"}>React</MenuItem>
          <MenuItem value={"Java"}>Java</MenuItem>
          <MenuItem value={"Spring"}>Spring</MenuItem>
          <MenuItem value={"Python"}>Python</MenuItem>
          <MenuItem value={"Vue"}>Vue</MenuItem>
          <MenuItem value={"Svelte"}>Svelte</MenuItem>
          <MenuItem value={"Nextjs"}>Nextjs</MenuItem>
          <MenuItem value={"Nodejs"}>Nodejs</MenuItem>
          <MenuItem value={"Nestjs"}>Nestjs</MenuItem>
          <MenuItem value={"Django"}>Django</MenuItem>
          <MenuItem value={"GraphQL"}>GraphQL</MenuItem>
          <MenuItem value={"Express"}>Express</MenuItem>
          <MenuItem value={"Firebase"}>Firebase</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
