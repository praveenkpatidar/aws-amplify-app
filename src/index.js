import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as serviceWorker from './serviceWorker';
import CssBaseline from "@mui/material/CssBaseline";
import { Amplify } from 'aws-amplify';
import config from './aws-exports'
Amplify.configure(config)

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: '#1976d2', // Blue color
    },
    secondary: {
      main: '#dc004e', // Pink color
    },
  }
});

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
