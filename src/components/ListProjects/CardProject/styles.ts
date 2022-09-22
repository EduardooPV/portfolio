import styled from "styled-components";

import c from "../../../styles/pallete.json";
import f from "../../../styles/typography.json";

export const Container = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  border: 1px solid ${c.neutral400};
  border-radius: 4px;
`;

export const Header = styled.header`
  font-family: montserrat, sans-serif;
  display: flex;
  flex-direction: column;

  p {
    font-size: ${f.h5.fontSize};
    line-height: ${f.h5.lineHeight};
    font-weight: bold;
    color: ${(props) => props.theme.colors.title};
    text-transform: capitalize;
  }

  span {
    font-family: montserrat, sans-serif;
    font-size: ${f.caption.fontSize};
    line-height: ${f.caption.lineHeight};
    color: ${c.neutral200};
  }
`;

export const Preview = styled.div`
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.theme.colors.barCard};

  img {
    width: 100%;
  }
`;

export const Description = styled.p`
  display: block;
  flex: 1;
  font-size: ${f.paragraphSmall.fontSize};
  line-height: ${f.paragraphSmall.lineHeight};
  color: ${(props) => props.theme.colors.descriptionCard};
`;

export const Footer = styled.footer`
  display: flex;
  gap: 20px;

  a:first-child {
    width: 100%;
    padding: 8px 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;

    color: ${c.black};
    background-color: ${c.primary300};
    text-decoration: none;
    border-radius: 4px;

    :hover {
      background: ${c.primary400};
      color: ${c.white};
    }

    :active {
      background: ${c.primary500};
      color: ${c.white};
    }
  }

  a:last-child {
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${c.primary300};
    border: 1px solid ${c.primary300};
    border-radius: 4px;
    transition: 0.2s;
    svg {
      font-size: 25px;
    }

    :hover {
      background: ${c.primary300};

      svg {
        color: ${c.white};
      }
    }
  }
`;
