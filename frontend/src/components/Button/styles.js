import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  width: 100%;  
  
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  padding: 1.2rem 3.2rem;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 24px;
  border: 0;
  border-radius: .5rem;
  white-space: nowrap;

  &:disabled {
    opacity: 0.5;    
  }
`;