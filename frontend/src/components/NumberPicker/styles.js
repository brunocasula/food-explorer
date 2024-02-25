import styled from "styled-components";

export const Container = styled.div`
  display: flex;        
  align-items: center;
  justify-content: center;
  gap: 1.4rem;  
            
  font-size: 2.0rem;

  > button {    
    display: flex;    
    font-size: 2.0rem;
    background-color: transparent;
    border: none;        
  }      

  > span {
    text-align: center;
    width: 1.8rem;
  }
`;