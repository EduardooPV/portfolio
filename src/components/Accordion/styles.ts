import styled from "styled-components";

import c from "../../styles/pallete.json";
import f from "../../styles/typography.json";

export const AccordionContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  overflow: hidden;
`;

export const AccordionItem = styled.div`
  /* border-bottom: 1px solid #e2e8f0; */
`;

export const AccordionHeader = styled.div<{ isOpen: boolean }>`
  width: 100%;
  padding: 8px 16px;
  border: none;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${f.paragraphLarge.fontSize};
  line-height: ${f.paragraphLarge.lineHeight};
  font-weight: 600;
  cursor: pointer;
  color: ${c.neutral300};
  border-radius: 30px;
  transition: all 0.3s linear;

  background-color: ${({ isOpen }) => (isOpen ? c.neutral600 : c.neutral700)};

  &:hover {
    background-color: ${c.neutral600};
  }

  @media (min-width: 768px) {
    padding: 16px;
  }
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: all 0.3s linear;

  font-size: 0.95rem;
  background: ${c.neutral700};

  font-size: ${f.paragraphSmall.fontSize};
  line-height: ${f.paragraphSmall.lineHeight};

  p,
  span {
    text-align: start;
    margin: 0;
  }
  p {
    padding: 1rem;
  }

  span {
    font-weight: 600;
    color: #2b6cb0;
  }
`;

export const IconWrapper = styled.span<{ isOpen: boolean }>`
  display: inline-flex;
  transition: transform 0.3s ease;
  transform: rotate(${({ isOpen }) => (isOpen ? "45deg" : "0deg")});
`;
