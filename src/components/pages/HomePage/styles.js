import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;  
`;

export const HomeHeaderContainer = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: space-between;  
  
  width: 90vw;
  padding: 20px;
  margin-bottom: 40px;
  border-bottom: 1px solid rgb(0,0,0,0.5);
`

export const CategorySelector = styled.select`
  width: 50vw;
  height: 5vh;
  font-size: 15px;
`

export const ProductLine = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;  

  width: 70vw;  
  padding: 10px 20px;
  margin: 20px;
  border-bottom: 1px solid rgb(0,0,0,0.2);
  
  
`

export const ProductImage = styled.img`
  width: 125px;
  height: 100px;
`

export const CountingCartContainer = styled.div`
  width: 60px;
  height: 50px;
  padding-top: 15px;
  position: sticky;
`
export const QuantityOfProducts = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  background-color: rgb(210,29,29,0.8);
  color: white;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  margin: 0px;

  position: absolute;
  right: 15px;
  top: 5px;
`
