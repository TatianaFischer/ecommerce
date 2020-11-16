
import React from "react";
import CartPageHeader from "./CartPageHeader";
import CartProducts from "./CartProducts";
import CartModal from "../../CartModal";
import {   
    CartPageContainer,
    CartProductsTableContainer,   
    TotalPrice
  } from "./styles"; 
 

const CartPage = (props) => {
 
        
    let cartTotalPrice = 0;
    props.cartItems.forEach(product => {
      cartTotalPrice += product.price * (product.quantity);   
    });   
      
    
    return (
        <CartPageContainer>            
            <CartPageHeader/>
            <CartProductsTableContainer>
                <h6>
                    Revise os seus itens:
                </h6>
                 
                 <CartProducts cartItems={props.cartItems} setCartItems={props.setCartItems}/>
                

                <TotalPrice> 
                    {props.cartItems.length > 0 && (
                        <>
                            <b>Valor total:</b>${cartTotalPrice.toFixed(2)}
                        </>

                    )}
                   
                </TotalPrice>
            </CartProductsTableContainer>
            {
            props.cartItems.length !== 0 && <CartModal/>
            }

           

        </CartPageContainer>           
                       
    ); 
};

export default CartPage;








