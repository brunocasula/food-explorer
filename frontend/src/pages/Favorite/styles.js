import styled from "styled-components";

export const Container = styled.div`
display: grid;
  grid-template-areas: 
  "header"
  "content"
  "footer";
      
  > main {
    grid-area: content;
    overflow: auto;        
  }  
`;

export const Content = styled.div`
  min-height: calc(100vh - 10.4rem - 7.7rem);

  max-width: 132.0rem;
  padding: 0 2.4rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .data-empty{
    margin: auto;
  }

  h1 {  
    padding: 3.4rem 0 3.2rem 0;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};    
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; 
  }

  > section{
    display: flex;
    flex-wrap: wrap;
    gap: 4.8rem;
  }

  @media (min-width: 768px) {    
    padding: 0 10.0rem;  
  }
`;


export const FavoriteDish = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;
  padding: 1.6rem 0;

  width: 23.1rem;
  height: 10.4rem;

 > img {
  width: 100%;
  max-width: 7.0rem;
  max-height: 10.0rem;
 }

 > section {
  h3 {    
    white-space: nowrap;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  button {
    border: none;
    background-color: transparent;    
    color: ${({ theme }) => theme.COLORS.TOMATO_400};
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }
 }

`;