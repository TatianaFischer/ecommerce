import React from "react";
import {Link} from "react-router-dom"
import Header from "../../Header/Header";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {    
    CartHeaderContainer,  
  } from "./styles";

 

const CartPageHeader = () => {
    
      
    
    return (
        <>
            <CartHeaderContainer>
               <Link to={`/`} ><ArrowBackIosIcon/></Link>  
             
               <Header/> 
            </CartHeaderContainer>
          
          
            <h1>Finalizar Pedido</h1>

           
        </>  
                       
    ); 
};

export default CartPageHeader;








