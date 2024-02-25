import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: .8rem;
  width: 100%;
  height: 100%;

  padding: .8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};  
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  
  border-radius: .8rem; 
`;