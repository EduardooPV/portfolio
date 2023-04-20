import styled from "styled-components";


export const List = styled.div`
  width: 100%;
  max-width: 1240px;

  margin: 0 auto;
  padding: 100px 20px 0px 20px;

  display: flex;
  gap: 10px;

  @media (min-width: 768px) {
    padding: 120px 20px 40px 20px;
  }
`;
