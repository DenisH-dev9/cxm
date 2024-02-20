import { Box, CardMedia } from "@mui/material";
import React from "react";
import { style } from "../../app/style";
import LanguageSelect from "../languageSelect";
import ChangeColorMode from "../changeColorMode";

const PublicLayoutWrapper = (props: any) => {

  return (
    <Box>
      <Box 
        sx={style.headerBox}
      >
        <CardMedia 
          component="img" 
          src="https://www.gotradehere.com/wp-content/uploads/2023/08/CXM-02-1024x423.png.webp"
          sx={style.headerLogo}
        />
        <LanguageSelect />
        <ChangeColorMode />
       </Box>
      {props.children}
    </Box>
  )
}

export default PublicLayoutWrapper;