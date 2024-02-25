import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  
  height: 7.7rem;
  width: 100%;  
  
  background-color: ${({ theme }) => theme.COLORS.DARK_600};  
`;

export const Content = styled.div`
  display: flex;    
  align-items: center;  
  justify-content: space-between; 
  
  max-width: 132.0rem;
  padding: 0 2.4rem;

  height: 100%;
  margin: 0 auto;   

  > p {        
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-family: Roboto;
    font-size: 1.2rem;
    font-weight: 400; 
  }

  @media (min-width: 768px) {
    padding: 0 10.0rem;

    > p {
      font-size: 1.4rem;
      line-height: 160%;
    }

  }
  
  @media (max-width: 370px) {
    padding: 0 1.0rem;    
    > p {
      font-size: 1.0rem;      
    }
  }

`;

export const Logo = styled.div`  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.0rem;  
  
  color: ${({ theme }) => theme.COLORS.LIGHT_700};  

  > img {
    height: 2.0rem;
  } 
      
  > h1 {           
    white-space: nowrap; 
    font-size: 1.4rem;
    font-weight: 700;
  }
        
  a {
    display: flex;
    gap: 1.123rem;

    text-decoration: none;
    color: inherit;
  }

  @media (min-width: 768px) {
    
    > img {
      height: 2.0rem;
    } 
  
    > h1 {           
      white-space: nowrap; 
      font-size: 2.4rem;
    }

  }
  
`;