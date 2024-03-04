import React from 'react';
import { Container, Box, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import LoginForm from '../../components/LoginForm';
import { NavLink } from 'react-router-dom'

const GuestPage = () => {

  return (
    <Container 
      maxWidth="lg">
        <Box>
        <Card variant="elevation">
          <CardContent>
            <Typography variant="h2">
              Not registered yet? It takes less than a minute
            </Typography>
          </CardContent>
          <CardActions>
            <NavLink to="../registration">
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
        >
          Risk Warning: Trading FX instruments and CFDs can incur a high level of risk and may result in a loss of all your invested Capital
        </Typography>
    </Container>
  )
}

export default GuestPage;