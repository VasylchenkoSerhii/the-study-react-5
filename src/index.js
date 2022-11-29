import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {theme} from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/the-study-react-5">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
);
