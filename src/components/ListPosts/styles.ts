import styled from "styled-components";
import c from "../../styles/pallete.json";

export const Container = styled.main`
  max-width: 1120px;

  margin: 0 auto;
  padding: 80px 20px 20px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    padding: 100px 20px;
  }
`;

export const SearchBar = styled.div`
  width: 100%;
  height: 70px;

  padding: 10px 0;

  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    width: 400px;
  }

  input {
    width: 100%;
    height: 100%;

    padding: 10px;

    border: 1px solid #8b8b8b8f;
    border-radius: 6px;

    color: ${c.heading};
    background: transparent;
  }

  label {
    margin-left: -40px;
  }
`;

export const Post = styled.a`
  border-radius: 4px;

  text-decoration: none;
  transition: background 0.2s, color 0.2s;

  div {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  @media (min-width: 768px) {
    padding: 20px;

    :hover {
      background: #20242bae;
    }

    :hover p:first-child {
      color: ${c.highlight};
    }
  }
`;

export const Title = styled.p`
  margin-bottom: 12px;

  font-weight: 700;
  color: ${(props) => props.theme.colors.titlePost};
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
  color: ${(props) => props.theme.colors.descriptionPost};

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
  color: ${(props) => props.theme.colors.datePost};
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
