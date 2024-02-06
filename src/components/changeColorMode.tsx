import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";

const ChangeColorMode = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode: any = useContext(ColorModeContext)


  return(
    <IconButton onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === 'dark' ? (<DarkMode />) : (<LightMode />)}
    </IconButton>
  )
}

export default ChangeColorMode;