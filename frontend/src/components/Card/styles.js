import styled from "styled-components";

export const Container = styled.div`    
  position: relative;
  display: flex;
  flex-direction: column;
  flex: none;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  width: 21.0rem;
  min-height: 29.2rem;
    
  padding: 2.4rem;
  border-radius: .8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  > button:first-child {
    display: flex;
    position: absolute;
    top: 2.1rem;
    right: 2.1rem;
    background: none;
    border: none;
    
    img {
      width: 2.4rem;      
    }
    
    a > {      
      font-size: 1.4rem;            
    }

    svg {      
      fill: ${({ theme, isFavorite }) => theme.COLORS.LIGHT_100};
    }
  }

  > img {
    width: 100%;
    max-width: 8.8rem;
    max-height: 17.6rem;
    object-fit: cover;
  }

  > a {    
    white-space: nowrap;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: center;
    font-family: Poppins;   
    font-size: 1.4rem;      
    font-weight: 500;    
  }

  > p {
    display: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    text-align: center;
    height: 5.2rem ;    
    font-family: Roboto;
    font-size: 1.4rem;    
    font-weight: 400;
    line-height: 160%;    
  }

  > strong {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    text-align: center;
    font-family: Roboto;
    font-size: 1.6rem;
    line-height: 100%;
    font-weight: 400;    
  }

  > div {
    display: flex;    
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;    
        
    > Button{
      max-height: 3.2rem;      
    }
  }
  
  @media (min-width: 768px) {  
    width: 30.4rem;
    gap: 1.2rem;      

    > img {    
      max-width: 17.6rem;
    }
    
    > a {                  
      font-size: 2.4rem;    
      font-weight: 700;
      line-height: 140%;          
    }

    > p {
      display: block;
      max-height: 4.6rem;
      overflow-y: auto;
    }

    > strong {
      font-size: 3.2rem;    
      line-height: 160%;
    }

    > div {    
      flex-direction: row;
      gap: 1.6rem;                  
      padding: 0 2.6rem;      
    
      > Button{
      max-height: 4.8rem;
      max-width: 9.2rem;
    }
  }

  }

`;