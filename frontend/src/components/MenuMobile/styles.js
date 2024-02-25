import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  position: absolute;  
  z-index: 100;  
  
  > header{
    display: flex;
    align-items: center;
    gap: 1.6rem;          
    padding: 2.8rem;
    height: 10.4rem;  
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    h3{      
      font-family: Roboto;
      font-size: 2.2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    button {   
      display: flex;
      align-items: center;
      
      border: none;
      background-color: transparent;      
      svg {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }  
    }
  }

  > main {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 3.6rem;    
    margin: 0 2.8rem;          
    
    nav {
      width: 100%;
    }
    
    li {      
      list-style: none ;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }

    button { 
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      padding: 1.0rem;
      font-family: Poppins;
      font-size: 24px;      
      font-weight: 300;
      line-height: 140%;
    }
        
  }  
    
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open="true"] {      
    transform: translateX(0);
    display: flex;
  }

  @media (min-width: 768px) { 
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    
    &[data-menu-is-open="true"] {      
      transform: translateX(-100%);
    }
  }  

`;