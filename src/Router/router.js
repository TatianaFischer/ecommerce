import React, {useState} from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from "../components/pages/HomePage";
import CartPage from "../components/pages/CartPage";
import CartModal from "../components/CartModal";

const Router = () => {

    const [cartItems, setCartItems] = useState([]);  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage cartItems={cartItems} setCartItems={setCartItems} />
        </Route>
        
        <Route exact path="/cart">
          <CartPage cartItems={cartItems} setCartItems={setCartItems} />
        </Route>
        <Route exact path="/cart-modal">
          <CartModal />
        </Route>

        <Route path="*">
        <HomePage artItems={cartItems} setCartItems={setCartItems} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;