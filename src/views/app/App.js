import React from 'react';
import ProductContainer from '../products';
import CartContainer from '../cart';
import style from './App.css';

const App = () => (
  <div className={style.app_wrapper}>
    <h1 className={style.title}>Shopping Cart</h1>
    <ProductContainer />
    <CartContainer />
  </div>
);

export default App;
