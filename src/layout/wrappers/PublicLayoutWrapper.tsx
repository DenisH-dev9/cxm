import { Box, CardMedia } from "@mui/material";
import React, { ReactNode } from "react";
import { style } from "../../app/style";
import LanguageSelect from "../../components/languageSelect";
import ChangeColorMode from "../../components/changeColorMode";

interface Props {
  children: ReactNode
}

const PublicLayoutWrapper = ({ children }: Props) => {

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

      {children}
      
    </Box>
  )
}

export default PublicLayoutWrapper;