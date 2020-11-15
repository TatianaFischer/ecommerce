import React, {useState} from 'react'
import {Link} from "react-router-dom"
import Header from "../../Header/Header"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {
    HomePageContainer,
    HomeHeaderContainer,
    ProductLine,
    ProductImage,
    QuantityOfProducts,
    CountingCartContainer,
    CategorySelector
  } from "./styles";

  import Button from '@material-ui/core/Button';

  
function HomePage(props){
    
  
    const [cartLength, setcartLength] = useState([])

    const [products, setProducts] = useState([{
  
          "id": 0,
          "category": "Frutas",
          "name": "Banana",
          "description": "Banana Orgânica 1kg",
          "price": 3.50,
          "image": "https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_1280.jpg",
          "quantity": 0
      },
      {
  
          "id": 1,
          "category": "Frutas",
          "name": "Maçã",
          "description": "Maçã Orgânica 1kg",
          "price": 5.50,
          "image": "https://cdn.pixabay.com/photo/2015/06/10/19/56/apples-805124_1280.jpg",
          "quantity": 0
      },
      {
  
          "id": 2,
          "category": "Bebidas",
          "name": "Suco Rosa",
          "description": "Suco de morango 500ml",
          "price": 10.00,
          "image": "https://cdn.pixabay.com/photo/2020/07/09/22/23/fruit-juice-5388892_1280.jpg",
          "quantity": 0
      },
      {
  
          "id": 3,
          "category": "Bebidas",
          "name": "Suco Verde",
          "description": "Suco de couve 500ml",
          "price": 5.50,
          "image": "https://cdn.pixabay.com/photo/2020/07/09/22/23/fruit-juice-5388892_1280.jpg",
          "quantity": 0
      },
      {
  
          "id": 4,
          "category": "Verduras",
          "name": "Cenoura",
          "description": "Cenoura Orgânica 1 molho",
          "price": 3.50,
          "image": "https://cdn.pixabay.com/photo/2018/02/25/08/56/carrot-3179988_1280.jpg",
          "quantity": 0
      },
  
    ]);
 
    const [category, setCategory] = useState("");

    const handleInputChange = (e) => {
        setCategory(e.target.value);
    };
    
   
    function addToCart(id) {
        
        
        setcartLength([...cartLength, id]);      

        const findProductIndex = products.findIndex((p) => p.id === id);
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
            products[findProductIndex ].quantity += 1;
            props.setCartItems([...props.cartItems, products[findProductIndex ]]);
      
            }
      }

 
    const renderProducts = 
    
        products.filter(product => category? product.category === category: true)
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

     const filterdProducts = products
        .filter((productA, index, arr) => index === arr.findIndex((productB) => productA.category === productB.category) )
        .map(item => (
            <option key={item.id} value={item.category}>{item.category}</option>
        ));
    

    return(
        <HomePageContainer>
            <HomeHeaderContainer>
                <Header/> 
                <Link to={`/cart`} style={{position: "relative"}}>
                    <CountingCartContainer>
                        <ShoppingCartIcon />
                        <QuantityOfProducts>{cartLength.length}</QuantityOfProducts>
                    </CountingCartContainer>
                </Link>                    
            </HomeHeaderContainer>

          

            <CategorySelector onChange={handleInputChange} defaultValue={""}>
                <option value={""}>Todas as catergorias</option>
                {filterdProducts}
            </CategorySelector>
            
            {renderProducts}
        </HomePageContainer>
        
    );
}

export default HomePage;