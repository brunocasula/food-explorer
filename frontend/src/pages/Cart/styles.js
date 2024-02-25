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
  display: flex;
  flex-direction: column;
  justify-content: space-between;    
  min-height: calc(100vh - 10.4rem - 7.7rem);

  max-width: 132.0rem;
  padding: 0 2.4rem;
  margin: 0 auto;

  > div {
    h1 {  
      padding: 3.4rem 0 3.2rem 0;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};    
      font-family: Poppins;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; 
    }    
    
    padding-bottom: 5.0rem;
  }


  .data-empty {
    margin: auto;
  }

  .my-cart {           
    width: 100%;
    max-width: 44.4rem;
     > section {       
      max-height: 400px;
      overflow-y: auto;      
    }
    > h3{
      padding: 1.6rem 0;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: Poppins;
      font-size: 2.0rem;        
      font-weight: 500;
      line-height: 160%;      
    }      
  }

  .my-payment {   
    width: 100%;
    max-width: 53.0rem;

    .payment {             
      border-radius: .8rem;
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
            
      > .payment-button {        
        display: flex;        
        height: 8.0rem;        
        
        > button:first-child {          
          border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};          
        }
        
        > button {
          display: flex;
          align-items: center;
          justify-content: center;          
          gap: .8rem;
          border: none;          
          background-color: transparent;
          width: 100%;
          height: 100%;

          > svg {
            font-size: 2.4rem;            
          }
        }
      }

      .payment-method {        
        border-top: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
        
        > .pix-method {                              
          padding: 2.0rem 2.0rem;
          display: flex;
          flex-direction: column;
          gap: 3.7rem;
          
          align-items: center;
          justify-content: center;
          
          img {            
            width: 100%;
            max-width: 18.2rem;
          }

          @media (min-width: 768px) {
            padding: 5.0rem 9.0rem;
          }
        }

        > .credit-method {
          label, input {
            font-family: Roboto;
            font-size: 1.6rem;            
            font-weight: 400;            
          }
          
          label {
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
          }
          input {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
          }

          padding: 2.0rem 4.2rem;

          fieldset {
            display: flex;
            flex-direction: column;
            gap: 3.7rem;
            border: none;
          }

          .input-inline{
            display: flex;
            gap: 1.7rem;
          }

          .input-wrapper {
            display: flex;
            flex-direction: column;
            gap: .8rem;

            > input {
              width: 100%;
              background-color: transparent;
              padding: 1.2rem 1.4rem;
              border-radius: 5px;
              border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
            } 
          }
          
          @media (min-width: 768px) {
            padding: 5.0rem 9.0rem;
          }
        }

        > .awaiting, .approved, .finished {          
          display: flex;
          flex-direction: column;
          align-items: center;          
          justify-content: center;
          gap: 3.7rem;
          padding: 6.0rem 6.0rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_700};
          
          p {
            text-align: center;
            color: ${({ theme }) => theme.COLORS.LIGHT_700};
            font-family: Roboto;
            font-size: 2.4rem;            
            font-weight: 700;            
          }

          svg {
            font-size: 10.4rem;
          }
        }

      }
    }
  }    

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 10.0rem;      
  }
`;

export const CartDish = styled.div`
  display: flex;
  align-items: center;  
  gap: 1.3rem;
  padding: 1.6rem 0;

  width: 40.2rem;
  height: 10.4rem;  

  > img {
    width: 100%;
    max-width: 7.0rem;
    max-height: 10.0rem;
  }

  > section {    

    div {      
      display: flex;
      gap: 1.0rem;
      align-items: center;      
      
      h3 {    
        white-space: nowrap;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};             
      }

      span {                
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: Roboto;
        font-size: 1.2rem;        
        font-weight: 400;
        line-height: 160%        
      }

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