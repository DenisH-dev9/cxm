/* eslint-disable no-constant-condition */
import React, { Suspense } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { useAuth } from "./app/hooks";
import { authRoutes, mainRoutes } from "./Routers/router";

const App = () => {
  const [theme, colorMode] = useMode();
  const isLogged = useAuth()

  const routes = useRoutes([isLogged ? mainRoutes : authRoutes])
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Suspense fallback={<p>Loading...</p>}>
            {routes}
          </Suspense> 
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
