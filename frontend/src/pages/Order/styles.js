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

  .data-empty, .loading {      
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

  > section, .section-mobile {
    display: flex;
    flex-wrap: wrap;
    gap: 1.7rem;
  }

  .section-mobile {
    max-height: 54.0rem;
    overflow: auto;
    overflow: overlay;
  }

  .table-wide  {
    text-align: left;
    display: none;    
    width: 100%; 
    max-height: 54.0rem;
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: .6rem .6rem 0 0;

    font-family: Roboto;
    font-size: 1.4rem;
    line-height: 160%;
    white-space: nowrap;
    overflow: auto;

    th {
      width: 100%; 
      padding: 2.1rem 2.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    td {
      padding: 1.6rem 2.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    th, td{
      border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }

    td:last-child,
    th:last-child{
      border-right: 1px solid ${({ theme }) => theme.COLORS.DARK_700};
    }

    tr:last-child > td{
      border-bottom: none;
    }

    th:first-child,
    th:nth-child(2),
    th:last-child {
      width: 15.0rem;
    }

    tbody tr:nth-child(odd){
      background-color: ${({ theme }) => theme.COLORS.DARK_500};
    }

    td:nth-child(3){
      max-width: 65.0rem;
      overflow: auto;
      overflow: overlay;
    }
    
  }


  .table-mobile {
    text-align: left;
    display: inline-block;    
    width: 100%;
    max-height: 11.4rem;
    max-height: 40.0rem;
    padding: .8rem 2.0rem;
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: .6rem;

    font-family: Roboto;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;    
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    overflow: auto;
    

    tbody tr:first-child > td{      
      padding-bottom: 1.6rem;
      width: 50.5rem;      
    }

    tbody tr:nth-child(2) > td,
    tbody tr:last-child > td{
      padding-bottom: 1.6rem;
      max-width: 65.0rem;
      overflow: auto;
      overflow: overlay;
    }   
  }

  select {
    width: 100%;
    min-width: 17.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background: ${({ theme }) => theme.COLORS.DARK_900};
    outline: none;
    border: none;

    padding: 1.3rem 1.6rem;
    border-right: 1.6rem solid transparent;    
  }

  ::-webkit-scrollbar {
    height: 4px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    padding: 0 10.0rem;

    .table-wide  {      
      display: inline-block;
    }

    .table-mobile  {      
      display: none;
    }   
  }  
`;



