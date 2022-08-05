import React, { useState } from "react";
import type { NextPage } from "next";

import { Button, TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const HomePage: NextPage = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <>
      <Button color="primary" variant="contained">
        Button
      </Button>
      <br />
      <br />
      <TextField placeholder="TEXT" />
      <br />
      <br />
      <TextField
        color="primary"
        placeholder="PASS"
        type={showPass ? "text" : "password"}
        InputProps={{
          sx: {
            paddingRight: "26px",
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  setShowPass(!showPass);
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                }}
              >
                {showPass ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default HomePage;
