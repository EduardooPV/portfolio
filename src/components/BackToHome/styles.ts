import styled from "styled-components";
import c from "../../styles/pallete.json";

export const Container = styled.span`
  position: fixed;
  right: 9%;
  bottom: 5.5rem;

  z-index: 10;

  path {
    fill: ${c.white};
  }

  @media (min-width: 768px) {
    right: 7%;
    bottom: 1.5rem;

    &:hover {
      animation: toping 0.2s alternate infinite;

      @keyframes toping {
        from {
          transform: translateY(0px);
        }

        to {
          transform: translateY(-10px);
        }
      }
    }
  }
`;
