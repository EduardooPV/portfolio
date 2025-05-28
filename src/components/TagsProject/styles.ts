import styled from "styled-components";
import c from "../../styles/pallete.json";

export const Tags = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.3rem;
  }
`;

export const IconWrapper = styled.span<{ color?: string }>`
  display: inline-flex;
  align-items: center;
  width: 28px;

  @media (min-width: 768px) {
    width: 33px;
  }

  svg {
    transform: scale(1.2);
    transform-origin: center;
    display: block;
    fill: ${c.neutral300};
    transition: all 0.2s;

    @media (min-width: 768px) {
      transform: scale(1.4);
      transform-origin: center;
    }

    &:hover {
      fill: ${({ color }) => color || "#000"};
      transform: scale(1.5);

      @media (min-width: 768px) {
        transform: scale(1.6);
      }
    }
  }
`;
