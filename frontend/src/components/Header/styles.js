import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  grid-area: header;  
  
  position: sticky;
  top: 0;
  z-index: 100;

  height: 10.4rem;  
  background-color: ${({ theme }) => theme.COLORS.DARK_600};      
`
export const Content = styled.div`
  display: flex;
  align-items: center;  
  justify-content: space-between;
  gap: 1.0rem;
    
  max-width: 132.0rem;
  padding: 0 2.4rem;
  
  height: 100%;
  margin: 0 auto;

  > .search{
    width: 100%;
    display: none;
  }

  .button-text { 
    display: none;
    border: none;
    background-color: transparent;
    white-space: nowrap;

    color: ${({ theme }) => theme.COLORS.LIGHT_300}; 
    text-align: center;
    font-family: Roboto;
    font-size: clamp(1.0rem, 1.6vw, 1.6rem); 
    font-weight: 400;    
  }

  > .button {
    display: none;    
    min-width: 21.6rem;     
  }

   .button-mobile{
    background-color: transparent;
    border: none;

    > svg {
      font-size: 3.2rem;
    }    
    
    .blank{
      display: block;      
    }
  }  
    
  @media (min-width: 768px) {        
    justify-content: space-between;
    padding: 0 10.0rem;  
    gap: 1.0rem;

    > .search{
      width: 100%;
      display: block;
    }

    > .button {
      display: block; 
      width: clamp(10.6rem, 10.6vw, 21.6rem);
    }
    
    .button-text { 
      display: block;
    }

    .button-mobile{
      display: none;
    }
    
    .blank{
      display: none;      
    }
    
  }
  
  @media (min-width: 920px) {          
    gap: 3.2rem;    
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.0rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};  
  
  > img {
    height: 2.4rem;
  } 
    
  > h1 {           
    white-space: nowrap; 
    font-size: 2.0rem;    
    font-weight: 700;
  }
      
  position: relative;  
  height: 6.0rem;  
  
  span {
    position: none;
    right: 0;
    bottom: 0;
    
    font-family: Roboto;
    font-size: 1.2rem;    
    font-weight: 400;
    line-height: 160%;
        
    color: ${({ theme }) => theme.COLORS.CAKE_200};  
  }

  @media (min-width: 768px) {
    > img {
      height: 2.0rem;
    } 
    
     > h1 {               
      font-size: 1.4rem;      
    } 

    span {    
      position: absolute;
     }
  }

  @media (min-width: 1120px) {        
    > img {
      height: 3.0rem;
    } 
    
     > h1 {               
      font-size: 2.4rem;      
    } 

    span {    
      position: absolute;
    }

  }
`;

export const Logout = styled.button`
  display: none;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};  
  font-size: 2.8rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.button`  
  display: flex;
  align-items: center;
  background: none;
  border: none; 

  > svg {
    font-size: 2.4rem ;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ButtonCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  height: 40px;
  width: 40px;
  
  > button {
    display: flex;
    align-items: center;
    background: none;
    border: none;

    > svg {
      font-size: 2.4rem ;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  > span {
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 50%;    
    width: 2.0rem;
    height: 2.0rem;    
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;    
    font-family: Poppins;
    font-size: 1.4rem;    
    font-weight: 500;

    z-index: 10;
  }

  @media (min-width: 768px) {
    display: none;
  }

`;

