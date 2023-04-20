import styled from "styled-components";
import c from "../../styles/pallete.json";

export const Container = styled.aside`
  width: 100%;
  height: fit-content;

  margin-top: 1rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 10px;
  background: #181a1d;
  position: sticky;
  top: 80px;
`;

export const ContainerImage = styled.div`
  padding-bottom: 1rem;

  display: flex;
  align-items: center;
  gap: 10px;

  border-bottom: 1px solid #8b8b8b8f;

  > img {
    width: 45px !important;
    height: 45px !important;
    border-radius: 50% !important;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    color: ${c.heading};
  }
`;

export const Details = styled.div`
  p {
    margin: 0 !important;
    font-size: 12px;
    line-height: 18px;
    color: ${c.highlight};
    font-weight: bold;
    text-transform: uppercase;
  }
  span {
    font-size: 16px;
    line-height: 24px;
    color: ${c.body};
  }
`;
