import styled from "styled-components";

export const CartPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;  

`;

export const CartHeaderContainer = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: space-between; 

  width: 90vw;
  padding: 20px;
  margin-bottom: 40px;
  border-bottom: 1px solid rgb(0,0,0,0.5);


`

export const CartProductsTableContainer = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: start; 


  width: 50vw;
  height: auto;
`

export const CartProductsTable = styled.div`
   display: flex; 
  flex-direction: column;
  justify-content: space-between; 
 

 
  padding: 20px; 
  border: 1px solid rgb(0,0,0,0.5);
`

export const TotalPrice = styled.div`
 display: flex; 
  flex-direction: row;
  justify-content: space-between; 

 
  padding: 20px; 
  border: 1px solid rgb(0,0,0,0.5);
  margin-bottom: 15px;
`