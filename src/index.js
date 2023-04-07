import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {ProductsProvider} from "./context/products.context";
import {ToggleCartProvider} from "./context/toggle-cart.context";
import {UserProvider} from "./context/user.context";
import './index.scss';

const rootElement = document.getElementById('root');

render(
    <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
            <ToggleCartProvider>
              <App/>
            </ToggleCartProvider>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </React.StrictMode>,
    rootElement
);
