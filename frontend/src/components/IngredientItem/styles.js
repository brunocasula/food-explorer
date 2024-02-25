import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;  

  background-color: ${({ theme, $isnew }) => $isnew ? `transparent` : theme.COLORS.LIGHT_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.LIGHT_700}` : "none"};

  border-radius: 0.8rem;
  padding-right: 1.6rem;

  > button {  
    display: flex;
    align-items: center;
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};      
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > input{
    width: 100px;
    height: 3.2rem;
    padding: 1.2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;

    border: none;

    &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
}

`;