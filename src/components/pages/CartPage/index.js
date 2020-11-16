
import React from "react";
import CartPageHeader from "./CartPageHeader";
import CartProducts from "./CartProducts";
import TotalPrice from "./TotalPrice";
import CartModal from "../../CartModal";
import {   
    CartPageContainer,
    CartProductsTableContainer,   
    
  } from "./styles"; 
 

const CartPage = (props) => { 
        
    
    return (
        <CartPageContainer>            
            <CartPageHeader/>
            <CartProductsTableContainer>
                <h6> Revise os seus itens:</h6>                 
                <CartProducts cartItems={props.cartItems} setCartItems={props.setCartItems}/>                
                <TotalPrice cartItems={props.cartItems} setCartItems={props.setCartItems}/>
            </CartProductsTableContainer>

            {props.cartItems.length !== 0 && <CartModal/>}
        </CartPageContainer>           
                       
    ); 
};

export default CartPage;








