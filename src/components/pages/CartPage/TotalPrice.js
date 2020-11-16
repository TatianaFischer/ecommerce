
import React from "react";
import {        
    TotalPriceContainer
} from "./styles";  

const TotalPrice = (props) => { 
        
    let cartTotalPrice = 0;
    props.cartItems.forEach(product => {
      cartTotalPrice += product.price * (product.quantity);   
    });   
      
    
    return (        

        <TotalPriceContainer> 
            {props.cartItems.length > 0 && (
                <>
                    <b>Valor total:</b>${cartTotalPrice.toFixed(2)}
                </>

            )}                   
        </TotalPriceContainer>     
                  
    ); 
};

export default TotalPrice;

