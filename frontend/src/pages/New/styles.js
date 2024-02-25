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

  @media (min-width: 768px) {    
    padding: 0 10.0rem;  
  }
`;

export const ButtonBack = styled.div`
  width: 100%;
  padding:  2.4rem 0;
  display: flex;
  
  > a {    
    font-family: Poppins;
    font-size: 2.4rem;    
    font-weight: 700;
    line-height: 140%;

    display: flex;
    align-items: center;    
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

   svg {    
    font-size: 3.0rem;
  }  
`;

export const Form = styled.form`
  
  > fieldset{
    padding-bottom: 4.0rem;    
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    border: none;

    > legend {
      margin-bottom: 3.2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};      
      font-family: Poppins;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
    }

    .input-line {      
      display: flex;             
      flex-direction: column;
      gap: 3.2rem;
    }
        
    .input-wrapper {       
      display: flex;
      flex-direction: column;      
      gap: 1.6rem;    
      
      width: 100%;
    }
    
    .flex-auto {      
      flex: 1;
    }
    
    .flex-content{      
      flex: content;
    }
    
    label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
    
    .input-file {               
      input[type="file"] {      
        display: none;    
      }          
      
        > .label-file {    
        display: flex;
        align-items: center;
        justify-content: start;
        gap: .8rem;
        
        height: 4.8rem;                     
        width: 100%;
        
        background-color: ${({ theme }) => theme.COLORS.DARK_900};              
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        border-radius: .8rem;
                  
        padding: 0 2.4rem;
        cursor: pointer;    
        border: .1rem solid transparent;
       
        > svg {    
          font-size: 2.4rem;    
        }
        transition:  box-shadow .2s;    
      }      

      .label-file:hover {
        -webkit-box-shadow: 0 0 .5rem .4rem #193746;
        box-shadow: 0 0 .5rem .4rem #193746;
        border: .1rem solid ${({ theme }) => theme.COLORS.LIGHT_700}; 
      }
      
    }
    
    .select-dropdown {            
      width: 100%;
      min-width: 21.2rem;

      background-color: ${({ theme }) => theme.COLORS.DARK_900};      
      color: ${({ theme }) => theme.COLORS.GRAY_300};      
      border-radius: .8rem;
      height: 4.8rem;           

      > select{
        width: 100%;
        height: 4.8rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    
        border: .1rem solid transparent;
        border-radius: 0.8rem;

        padding: 1.4rem;        
        transition:  box-shadow .2s; 

        outline: none;
      }
            
      select:focus {
        -webkit-box-shadow: 0 0 .5rem .4rem #193746;
        box-shadow: 0 0 .5rem .4rem #193746;
        border: .1rem solid ${({ theme }) => theme.COLORS.LIGHT_700}; 
      }      
    }    

    .button-wrapper{      
      max-width: 17.2rem;
      align-self: flex-end;
    }    
  }

  @media (min-width: 768px){
    gap: 3.2rem;
    > fieldset {
      .input-line {      
        display: flex;             
        flex-direction: row;
      }

      .input-file { 
        max-width: 22.9rem;
        
        input[type="file"] {      
          display: none;    
        }                  
      }

      .select-dropdown {            
        width: 100%;
        max-width: 36.4rem;
      }

      .price{      
        max-width: 25.0rem;
      }

    }  
  }

`;






