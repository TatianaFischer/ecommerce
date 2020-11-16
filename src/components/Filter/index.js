import React from 'react'
import {   
    ProductLine,
    ProductImage,
    CategorySelector
} from "../pages/HomePage/styles";
import Button from '@material-ui/core/Button';

  
function Filter(props){
   
    const handleInputChange = (e) => {
        props.setCategory(e.target.value);
    };
   
    function addToCart(id) {        
        
        props.setCartLength([...props.cartLength, id]);      

        const findProductIndex = props.products.findIndex((p) => p.id === id);
        const findProductCartIndex = props.cartItems.findIndex((p) => p.id === id);
                //se encontrar ids iguais: retorna o index do producto
                //se não encontrar ids iguais retorna -1     
        if (findProductCartIndex !== -1) {
                //se encontrar dentro do carrinho o ID igual, 
                //acrescenta +1 na quantidade do produto enontrado que já está no carrinho
                //mantendo o carrinho igual
          props.cartItems[findProductCartIndex].quantity += 1;
                 
          props.setCartItems([...props.cartItems]);
        
          
        } else {
                //se não encontrar dentro do carrinho, 
                //vai procurar dentro da lista de produtos o index daquele ID, 
                //acrescentar +1 e adicionar aquele produto ao carrinho.
            props.products[findProductIndex ].quantity += 1;
            props.setCartItems([...props.cartItems, props.products[findProductIndex ]]);
      
            }
      }
 
    const renderProducts = 
    
        props.products.filter(product => props.category? product.category === props.category: true)
        .map((product) => (         
         
            <ul key={product.id}>
                <ProductLine > 
                    <ProductImage alt={product.name} src={product.image}/>
                    <p> {product.name}</p> -
                    <p>{product.description}</p> -
                    <p>R$ {product.price}</p>
                    
                    <Button 
                        variant="contained" 
                        disableElevation 
                        size="small" 
                        onClick={()=> addToCart(product.id)}
                        >Adicionar
                    </Button>
                </ProductLine>     
            </ul>
        ));

    const filterdProducts = props.products
        .filter((productA, index, arr) => index === arr.findIndex((productB) => productA.category === productB.category) )
        .map(item => (
            <option key={item.id} value={item.category}>{item.category}</option>
        ));
    

    return(
      
        <>       
            <CategorySelector onChange={handleInputChange} defaultValue={""}>
                <option value={""}>Todas as catergorias</option>
                {filterdProducts}
            </CategorySelector>
            
            {renderProducts}
        </>
    );
}

export default Filter;