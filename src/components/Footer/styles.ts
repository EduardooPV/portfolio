import styled from "styled-components";

import f from "../../styles/typography.json";
import c from "../../styles/pallete.json";

export const Container = styled.footer`
  background: ${c.neutral500};
`;

export const Content = styled.div`
  max-width: 1240px;

  margin: 0 auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (min-width: 1000px) {
    padding: 40px;

    flex-direction: row;
  }

  div a {
    position: relative;

    display: flex;
    align-items: center;
    gap: 10px;

    font-size: ${f.paragraphLarge.fontSize};
    line-height: ${f.paragraphLarge.lineHeight};
    color: ${c.neutral100};
    text-decoration: none;

    ::after {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 0px;
      height: 2px;
      background: ${c.neutral100};

      transition: all 0.2s;
    }

    &:hover {
      ::after {
        left: 0;
        width: 100%;
      }
    }
  }

  span {
    font-size: ${f.caption.fontSize};
    color: ${c.neutral100};
  }
`;
