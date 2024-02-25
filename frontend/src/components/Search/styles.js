import styled from "styled-components";

export const Container = styled.div` 
  display: flex;
  align-items: center;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: .8rem;
  padding: 0 1.4rem;

  input {
    width: 100%;
    height: 4.8rem;

    padding: 1.6rem;
    border: 0;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;

    &:placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
}

  label {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 1.6rem;
} 
    
  svg {
  color: red ${({ theme }) => theme.COLORS.LIGHT_400};
}

`;