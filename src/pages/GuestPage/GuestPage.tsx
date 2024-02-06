import React, { useContext } from 'react';
import { Container, Box, Card, CardContent, CardActions, CardMedia, Button, Typography, IconButton, useTheme } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import LoginForm from '../../Forms/LoginForm/LoginForm';
import LanguageSelect from '../../components/languageSelect';
import { NavLink } from 'react-router-dom'
import { style } from '../../app/style';
import ChangeColorMode from '../../components/changeColorMode';

const GuestPage = () => {
  
  return (
    <Container 
      maxWidth="lg" 
      sx={style.GuestPageContainer}
    >
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
        <Box 
          sx={style.GuestPageBodyBox}
        >
        <Card 
          variant="elevation" 
          sx={style.registrationSugestionCard}
        >
          <CardContent>
            <Typography 
              variant="h2"
            >
              Not registered yet? It takes less than a minute
            </Typography>
          </CardContent>
          <CardActions>
            <NavLink 
              to="../registration" 
            >
              <Button 
                variant="outlined" 
                size="large"
              >
                Registration
              </Button>
            </NavLink>
          </CardActions>
        </Card>
        <LoginForm />
       </Box>

       

        <Typography 
          component="span" 
          variant="body2" 
          sx={style.riskWarningTypography}
        >
          Risk Warning: Trading FX instruments and CFDs can incur a high level of risk and may result in a loss of all your invested Capital
        </Typography>
    </Container>
  )
}

export default GuestPage;