import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
  "header"
  "content"
  "footer";

  > main {
    grid-area: content;    
    overflow-y: auto;         
  }  
  
`;

export const Content = styled.div`   
  min-height: calc( 100vh - 10.4rem - 7.7rem);
  
  max-width: 132.0rem;
  padding: 0 2.4rem;    
  margin: 0 auto; 

  .loading {
    margin: auto;
  }

  @media (min-width: 768px) {
    padding: 0 10.0rem;   
  }
`;

export const Banner = styled.div`
  display: flex;  
  position: relative;
  margin-top: 1.5rem;
  padding-bottom: 4.6rem;

  > img {        
    position: absolute;
    width: 19.1rem;
    height: 14.9rem;
    left: -2.8rem;
    top: 1px;
    object-fit: cover;
    object-position: top; 
  }

  > .banner {
    width: 100% ;
    display: flex;
    justify-content: end;

    margin-top: 2.9rem;
    align-items: center;
    padding-right: .8rem;
    height: 12.0rem;
    border-radius: 8px;

    background: linear-gradient(180deg, ${({ theme }) => theme.COLORS.GRADIENTS_200} 0%, ${({ theme }) => theme.COLORS.GRADIENTS_300} 100%);

    .title{
      max-width: 21.5rem;
      > h1 {        
        font-family: Poppins;        
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 140%;
      }

      > p {        
        font-family: Roboto;
        font-size: 1.2rem;
        font-weight: 400;
      } 
    }
    
  }
  
  @media (min-width: 768px) {
    margin-top: 2.6rem;

    > img {
      width: 60.0rem;
      height: 40.0rem;
      left: -5.4rem;      
      object-fit: cover; 
      object-position: top;     
    }
    
    > .banner{
      height: 26.0rem;
      margin-top: 14.0rem;
      padding-right: 10.0rem;

      .title{
        max-width: 100%;
        > h1 {                  
          font-size: 4.0rem;        
        }

        > p {                
          font-size: 1.6rem;      
        } 
      }
    }

  }
`;
