import React from 'react'
import {Link} from "react-router-dom"
import Header from "../../Header/Header"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {    
    HomeHeaderContainer,  
    QuantityOfProducts,
    CountingCartContainer,
} from "./styles";

  
function HomePageHeader(props){
 
    return(
      
            <HomeHeaderContainer>
                <Header/> 
                <Link to={`/cart`} style={{position: "relative"}}>
                    <CountingCartContainer>
                        <ShoppingCartIcon />
                        <QuantityOfProducts>{props.cartLength.length}</QuantityOfProducts>
                    </CountingCartContainer>
                </Link>                    
            </HomeHeaderContainer>          
           
        
    );
}

export default HomePageHeader;
