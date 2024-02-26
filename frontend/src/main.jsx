import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import { AuthProvider } from './hooks/auth';
import { CartProvider } from './hooks/cart';
import { FavoriteProvider } from './hooks/favorite';
import { Routes } from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <AuthProvider>
        <FavoriteProvider>
          <CartProvider>
            <Routes />

            <ToastContainer
              position="top-right"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              // theme="colored"
              theme="dark"
              // transition:Bounce
              transition:Flip
            />

          </CartProvider>
        </FavoriteProvider>
      </AuthProvider>

    </ThemeProvider>
  </React.StrictMode>,
)
