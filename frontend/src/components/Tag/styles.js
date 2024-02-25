import styled from "styled-components";

export const Container = styled.div`
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;

  font-size: 1.4rem;
  line-height: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};    
`;