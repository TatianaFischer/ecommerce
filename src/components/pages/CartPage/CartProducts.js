/* eslint-disable no-restricted-globals */
import React from "react";
import {useHistory} from "react-router-dom";
import {       
    CartProductsTable,    
  } from "./styles";
  import AddCircleIcon from '@material-ui/icons/AddCircle';
  import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'; 
  import DeleteIcon from '@material-ui/icons/Delete';
 

const CartProducts = (props) => {
    const history = useHistory();
      
    function confirmBackToHome() {        
       const wasConfirm = confirm("Carrinho vazio! Voltar para a loja?") 
        if(wasConfirm === true) {
            console.log(wasConfirm)
            history.push("/");
        } console.log(wasConfirm)
        
    }

    function quantityIncrement(id) {
        const findProductCartIndex = props.cartItems.findIndex((p) =>
        p.id === id);

        if(findProductCartIndex !== -1) {
            props.cartItems[findProductCartIndex].quantity += 1;
            props.setCartItems([...props.cartItems]);
        }
        
    }

    function quantityDecrement(id) {
        const findProductCartIndex = props.cartItems.findIndex((p) =>
        p.id === id);

        if(findProductCartIndex !== -1) {
            if(props.cartItems[findProductCartIndex].quantity === 1) {
                props.cartItems.splice(findProductCartIndex, 1);
                props.setCartItems([...props.cartItems])
                alert("Item removido do carrinho");
                return props.cartItems;

            }
                props.cartItems[findProductCartIndex].quantity -=1;
                props.setCartItems([...props.cartItems])          
        }
    }

    function removeFromCart(id) {
        const findProductCartIndex = props.cartItems.findIndex((p) => 
        p.id === id);

         if (findProductCartIndex !== -1) {
             
                props.cartItems.splice(findProductCartIndex, 1);
                alert("Item removido do carrinho");
               
        }
            props.setCartItems([...props.cartItems]);
            
        }  

    
    return (     
                 
                <CartProductsTable>
                    {props.cartItems.length === 0 && 
                    <><p> Carrinho vazio, adicione produtos {confirmBackToHome()} </p></>
                    } 
                                      
                    {props.cartItems.map(product => (
                        <p key={product.id}>
                            <RemoveCircleIcon onClick={() => quantityDecrement(product.id)}/> 
                                {product.quantity} 
                            <AddCircleIcon onClick={() => quantityIncrement(product.id)}/> 
                                {product.name} - R${product.price}
                            <DeleteIcon onClick={() => removeFromCart(product.id)}/>                      
                        </p>                            
                   
                       ))}
                </CartProductsTable>                                         
    ); 
};

export default CartProducts;





