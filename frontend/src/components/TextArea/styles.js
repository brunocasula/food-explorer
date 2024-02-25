import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};  
    
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  
  border-radius: .8rem;  
 
  > textarea {
    width: 100%;
    height: 17.2rem;
    resize: none;

    font-family: Roboto;
    font-size: 1.6rem;    
    font-weight: 400;
    border: .1rem solid transparent; 
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    padding: 1.4rem;
    border: 1px solid transparent;
    border-radius: .8rem;
    
    transition: box-shadow .2s; 
    
    &::placeholder {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > textarea:focus {
    -webkit-box-shadow: 0 0 .5rem .4rem #193746;
    box-shadow: 0 0 .5rem .4rem #193746;
    border: .1rem solid ${({ theme }) => theme.COLORS.LIGHT_700}; 
  }
  
  > svg {    
    font-size: 2.4rem;    
  }

`;

