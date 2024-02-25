import styled from "styled-components";

export const Container = styled.div`
display: grid;
  grid-template-areas: 
  "header"
  "content"
  "footer";
      
  > main {
    grid-area: content;
    overflow: auto;        
  }  
`;

export const Content = styled.div`
  min-height: calc(100vh - 10.4rem - 7.7rem);

  max-width: 132.0rem;
  padding: 0 2.4rem;
  margin: 0 auto;

  @media (min-width: 768px) {    
    padding: 0 10.0rem;  
  }
`;

export const ButtonBack = styled.div`
  width: 100%;
  padding:  2.4rem 0;
  display: flex;
  
  > a {    
    font-family: Poppins;
    font-size: 2.4rem;    
    font-weight: 700;
    line-height: 140%;

    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

   svg {    
    font-size: 3.0rem;
  }
`;

export const DishDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;
  padding-bottom: 10.0rem;  
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  
  > img {
    width: 100%;
    max-width: 39.0rem;
    object-fit: cover;
  }
  
  > section {        
    display: flex;
    flex-direction: column;    
    gap: 2.4rem;

    font-family: Poppins;
    text-align: center;
    > h1{      
      font-size: 2.7rem;    
      font-weight: 500;
      line-height: 140%;      
    }

    > p {
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
    }    
  }

  @media (min-width: 768px) {    
    flex-direction: row;  
    
    > section {            
      text-align: start;

      > h1{      
        font-size: 4.0rem;    
      }

      > p {
        font-size: 2.4rem;
      }
    }
  }

`;

export const Ingredients = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;

  @media (min-width: 768px) {    
    justify-content: start;
  }
`;

export const Info = styled.div`
  margin-top: 2rem;  
  display: flex;
  justify-content: center;
  align-items: center;  
  gap: 1.7rem;
  width: 100%;  
  
  > div {    
    display: flex;
    align-items: center;      
    gap: 1.4rem;              

    > button {
      height: 4.8rem;                 
    }    
  }

  @media (min-width: 768px) {    
    justify-content: start;
  }

`;