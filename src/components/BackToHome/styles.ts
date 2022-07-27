import styled from "styled-components";

export const Container = styled.span`
  position: fixed;
  right: 7%;
  bottom: 1.5rem;

  z-index: 10;

  path {
    fill: ${(props) => props.theme.colors.icon};
  }

  @media (min-width: 768px) {
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
