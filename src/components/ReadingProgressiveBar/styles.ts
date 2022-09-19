import styled from "styled-components";
import c from "../../styles/pallete.json";

interface ReadingProgressiveBarStyles {
  width: number;
}

export const Container = styled.div`
  width: 100%;
  top: 60px;
  position: sticky;
  z-index: 9;
`;

export const Bar = styled.div<ReadingProgressiveBarStyles>`
  width: ${(props) => props.width}%;
  max-width: 100%;
  height: 5px;
  background: ${c.highlight};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;
