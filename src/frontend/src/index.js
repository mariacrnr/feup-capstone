import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { ThemeProvider } from "@mui/material/styles";

import "./styles/style.css";
import AppRouter from "./AppRouter";
import AppTheme from "./AppTheme";

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={AppTheme}>
        <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);