import styled from "styled-components";
import c from "../../styles/pallete.json";
import f from "../../styles/typography.json";

export const Container = styled.footer`
  background: ${c.primary300};
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

  @media (min-width: 768px) {
    padding: 40px;

    flex-direction: row;
  }

  div a {
    position: relative;

    display: flex;
    align-items: center;
    gap: 10px;

    font-size: ${f.paragraphLarge.fontSize};
    color: ${c.neutral700};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    font-size: ${f.caption.fontSize};
    color: ${c.black};
  }
`;
