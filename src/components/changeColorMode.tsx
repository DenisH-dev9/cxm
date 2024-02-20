import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext } from "../theme";

const ChangeColorMode = () => {

  const theme = useTheme()
  // const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)


  return(
    <IconButton onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === 'dark' ? (<DarkMode />) : (<LightMode />)}
    </IconButton>
  )
}

export default ChangeColorMode;