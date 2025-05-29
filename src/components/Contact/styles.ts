import styled from "styled-components";

import c from "../../styles/pallete.json";
import f from "../../styles/typography.json";

export const Container = styled.section`
  max-width: 1240px;

  display: grid;
  grid-template-columns: 1fr;

  margin: 0px auto;
  padding: 50px 20px;
  position: relative;

  z-index: 2;

  @media (max-width: 767px) {
    div img {
      position: absolute;
      transform: scaleX(-1) rotate(110deg) !important;

      height: 30px;

      right: 16px;
      top: 110px;
    }
  }

  @media (min-width: 768px) {
    padding: 120px 20px;

    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;

    div img {
      position: relative;
    }
  }
`;

export const Header = styled.div`
  margin-bottom: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    align-self: center;
  }

  img {
    align-self: flex-end;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;

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
    font-size: ${f.paragraphSmall.fontSize};
    background: ${c.neutral700};
    border-radius: 10px;
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

  > div:last-child {
    padding-top: 2rem;
    display: flex;
    justify-content: center;

    button {
      max-width: none;
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

  .success {
    text-align: center;
    padding: 10px 0;
    color: ${c.primary300};
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
