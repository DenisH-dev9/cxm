import { Box, CardMedia } from "@mui/material";
import React, { ReactNode } from "react";
import LanguageSelect from "../../components/languageSelect";
import ChangeColorMode from "../../components/changeColorMode";

interface Props {
  children: ReactNode
}

const PublicLayoutWrapper = ({ children }: Props) => {

  return (
    <Box>
      <Box>
        <CardMedia 
          component="img" 
          src="https://www.gotradehere.com/wp-content/uploads/2023/08/CXM-02-1024x423.png.webp"
        />
        <LanguageSelect />
        <ChangeColorMode />
       </Box>

      {children}
      
    </Box>
  )
}

export default PublicLayoutWrapper;