import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};  
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  
  border-radius: .8rem;     
  
  
  > input {            
    padding: 1.2rem 1.4rem;
    height: 4.8rem;
    width: 100%;    

    font-family: Roboto;
    font-size: 1.6rem;    
    font-weight: 400;
    border: .1rem solid transparent; 
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border-radius: .8rem;

    &placeholder {      
      align-items: center;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }        

    transition: box-shadow .2s;    
  }
 
  > input:focus {
    -webkit-box-shadow: 0 0 .5rem .4rem #193746;
    box-shadow: 0 0 .5rem .4rem #193746;
    border: .1rem solid ${({ theme }) => theme.COLORS.LIGHT_700}; 
  }
  
  > svg {    
    font-size: 2.4rem;    
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::-ms-reveal {
    filter: invert(100%);    
  } 

`;