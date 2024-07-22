import styled from "styled-components";

import c from "../../styles/pallete.json";
import f from "../../styles/typography.json";

export const Container = styled.section`
  max-width: 1240px;

  display: grid;
  grid-template-columns: 1fr;

  margin: 50px auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    margin: 120px auto;

    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
  }
`;

export const Header = styled.div`
  margin-bottom: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    align-items: flex-start;
  }

  p {
    text-align: center;
    line-height: ${f.caption.lineHeight};

    @media (min-width: 768px) {
      text-align: start;
    }
  }

  strong {
    color: ${c.primary300};
    font-weight: 500;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  input,
  textarea {
    background: transparent;
    border-radius: 4px;
    border: 1px solid ${c.neutral300};
    color: ${c.neutral100};
    width: 100%;
    padding: 12px 8px;
    resize: none;
  }

  > div:first-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    > div {
      width: 100%;
    }
  }

  button[type="submit"] {
    border: 2px solid transparent;
    transition: all 2s;
    margin-top: 10px;
    padding: 8px 20px;
    background: ${c.primary300};
    color: ${c.black};
    cursor: pointer;
    transition: filter 0.2s;

    text-decoration: none;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;

    :hover {
      filter: brightness(0.8);
    }

    :active {
      background: ${c.primary400};
    }
  }

  input:focus.error-field {
    outline: 2px solid red;
    outline-offset: 4px;
  }

  .error-field {
    border: 1px solid red;
  }

  .error {
    padding-top: 8px;
    padding-left: 10px;
    color: red;
  }

  .warning {
    padding-top: 8px;
    padding-left: 10px;
    color: ${c.neutral300};
    font-size: 12px;
  }

  button.loading {
    border: 2px solid #936a33;
    background: transparent;
  }

  .success {
    text-align: center;
    padding: 10px 0;
    color: ${c.primary300};
    font-weight: 600;
  }

  .spinner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .spinner > span {
    border: 4px solid ${c.neutral300};
    border-top: 4px solid ${c.primary300};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
