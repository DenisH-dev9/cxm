import { Box } from "@mui/material";
import React, { lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const Main = lazy(() => import("../../pages/Main"))

const PrivateLayout = () => {

  return (
    <Box>
    <Outlet />
  </Box>
  )
}

export default PrivateLayout;