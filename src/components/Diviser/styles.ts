import styled from "styled-components";
import c from '../../styles/pallete.json'

export const Container = styled.div`
  height: 70px;

  display: flex;
  align-items: center;

  margin: 40px 0;

  overflow: hidden;

  div { 
    width: 100vw;
    height: 6px;
    
    position: relative;
    background: ${c.primary300};
    
    transform: rotate(-4deg);
    
    @media (min-width: 768px) {
      height: 10px;
      transform: rotate(-2deg);
    }
    
    span:first-child {
      position: absolute;
      top: -20px;
      left: 0;

      height: 3px;
      width: 20%;
      
      border-radius: 100px;
      background: ${c.primary300};

      @media (min-width: 768px) {
        height: 5px;
      }

      &:after {
        content: "";
        display: block;

        position: absolute;
        right: -15px;
        
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: ${c.primary300};

        animation: spinnerLeft 1s alternate ease-out infinite;

        @keyframes spinnerLeft {
          from {
            transform: translateX(-5px);
          }
          to {
            transform: translateX(5px);
          }
        }

        @media (min-width: 768px) {
          width: 5px;
          height: 5px;
        }
      }
    }
    
    span:last-child {
      content: "";
      display: block;
      position: absolute;
      bottom: -20px;
      right: 0;
      
      height: 3px;
      width: 20%;
      
      border-radius: 100px;
      background: ${c.primary300};
      
      @media (min-width: 768px) {
        height: 5px;
      }
      
      &:after {
        content: "";
        display: block;
        
        position: absolute;
        left: -15px;
        
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: ${c.primary300};

        animation: spinnerRight 1s alternate ease-out infinite;

        @keyframes spinnerRight {
          from {
            transform: translateX(5px);
          }
          to {
            transform: translateX(-5px);
          }
        }
        
        @media (min-width: 768px) {
          width: 5px;
          height: 5px;
        }
      }
    }
  }
  `