import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  @media (min-width: 768px) {    
    flex-direction: row;    
    justify-content: space-around;    
  }
`;

export const Form = styled.form`   
  width: 100%;
  max-width: 476px;  
  display: flex; 
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;
  border-radius: 1.6rem;
  
  padding: clamp(3.2rem, 1rem + 5vw, 6.4rem);
        
  > legend {
    display: none;
    text-align: center;      
    font-size: 3.2rem;
    font-weight: 500;  
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
  
  > .input-wapper {
    display: flex;
    flex-direction: column;
    gap: .8rem;
    
    > label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  a {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    > legend{
      display: block;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 2.0rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  align-items: center;  

  > h1 {
    font-family: Roboto;   
    font-size: clamp(3.2rem, 1rem + 5vw, 4.2rem);
    white-space: nowrap;
  }
`