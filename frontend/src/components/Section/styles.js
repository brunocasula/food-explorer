import styled from "styled-components";

export const Container = styled.section` 
  width: 100%;    
  padding-inline: 4rem;
  margin-bottom: 4rem;
  > h2 {
    padding-bottom: 2.3rem;
    font-family: Poppins;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 140%; /* 44.8px */
  }

  padding-inline: 0;
   
  @media (min-width: 768px) {    
    padding-inline: 0;
    > h2 {
      font-size: 3.2rem;
    }
  } 
`;

export const Slider = styled.div`  
  width: 100%;
  position: relative;    

  > div {
    display: flex;
    gap: 1.6rem;
    overflow-x: auto;
    scroll-behavior: smooth;   
  }
  
  .btn-left,
  .btn-right { 
    display: none;
    position: absolute;
    z-index: 5;
    height: 100%;
    width: 6.0rem;
    color: ${({ theme }) => theme.COLORS.WHITE};    
    opacity: 0;
  }
  
  .btn-left {
    top: 0;
    left: 0;
    border: none;
    background: linear-gradient(
      270deg,
      ${({ theme }) => theme.COLORS.DARK_200} 0%,
      ${({ theme }) => theme.COLORS.DARK_400} 100%
    );


    @media (min-width: 768) {
      gap: 2.7rem;
      padding-right: 8rem;      
    }
  }
  
  .btn-right {
    top: 0;
    right: 0;
    justify-content: flex-end;
    border: none;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.COLORS.DARK_200} 0%,
      ${({ theme }) => theme.COLORS.DARK_400} 100%
    );
  }
    
  ::-webkit-scrollbar {
    height: 6px;
  }  
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 8px;
  }


  @media (min-width: 768px) {
    > div {
      gap: 2.4rem;      
      padding-right: 6rem;
      padding-left: 1rem;
    } 

    .btn-left,
    .btn-right {
      display: block;
      align-items: center;
      transition: all ease 0.5s;
      opacity: 0;

      width: 6.0rem;
    }
    &:hover {
      .btn-left,
      .btn-right {
        opacity: .8;
      }      
    }
  }   

`;