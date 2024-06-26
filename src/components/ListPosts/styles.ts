import styled from "styled-components";
import c from "../../styles/pallete.json";

export const Container = styled.main`
  max-width: 1240px;

  margin: 0 auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Post = styled.a`
  border-radius: 4px;

  text-decoration: none;
  transition: background 0.2s, color 0.2s;

  & + a {
    border-top: 1px solid #BABABA50;
    padding-top: 40px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  @media (min-width: 768px) {
    P {
      transition: color 0.1s;
    }

    :hover p:first-child {
      text-decoration: underline;
      color: ${c.highlight};
    }
  }
`;

export const Title = styled.p`
  margin-bottom: 12px;

  font-weight: 700;
  color: ${c.heading};
  font-size: 24px;
  line-height: 30px;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 34px;
  }
`;

export const Description = styled.p`
  margin-bottom: 24px;

  font-size: 16px;
  line-height: 22px;
  color: ${c.body};

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Date = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;

  font-size: 14px;
  line-height: 17px;
  color: ${c.info};
`;

export const Tag = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    padding: 11px 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 13px;
    line-height: 0;
    font-weight: bold;
    color: ${c.white};

    border-radius: 2px;
  }
`;
