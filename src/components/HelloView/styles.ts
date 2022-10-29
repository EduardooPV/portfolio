import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  background: #171515;

  z-index: 9999;
  visibility: hidden;
  opacity: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  animation: helloView 4.8s;

  @keyframes helloView {
    0% {
      opacity: 1;
      visibility: visible;
    }

    80% {
      opacity: 1;
      visibility: visible;
    }

    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  div {
    animation: animationsView 4s forwards;

    @keyframes animationsView {
      0% {
        opacity: 1;
        visibility: visible;
      }

      80% {
        opacity: 1;
        visibility: visible;
      }

      100% {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
`;

export const Robot = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const Welcome = styled.div`
  width: 100%;
  max-width: 600px;
`;
