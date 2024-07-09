import styled from "styled-components";

import c from "../../styles/pallete.json";
import t from "../../styles/typography.json";

export const Container = styled.section`
  max-width: 1240px;
  margin: 0 auto;

  padding: 40px 20px 80px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    width: 100%;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
`;

export const Content = styled.div`
  width: 100%;

  margin: 4rem 0;

  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  font-family: "Montserrat", sans-serif;
`;

// export const CardUIUX = styled.div`
//   max-width: 640px;
//   padding: 20px;

//   display: flex;
//   flex-direction: column;
//   gap: 20px;

//   background: ${c.neutral500};
//   border: 2px solid ${c.neutral200};

//   &:hover {
//     transition: all 0.1s;
//     border: 2px solid ${c.primary300};
//     box-shadow: -5px 5px 0px ${c.primary300};
//   }

//   path {
//     fill: ${c.primary300};
//   }

//   @media (min-width: 768px) {
//     padding: 40px;
//     flex-direction: row;

//     position: absolute;

//     top: 0;
//     left: 0;
//   }

//   > div {
//     display: flex;
//     align-items: center;

//     svg {
//       max-width: 60px;

//       @media (min-width: 768px) {
//         max-width: 70px;
//       }
//     }
//   }

//   span {
//     color: ${c.neutral200};
//     font-size: ${t.paragraphSmall.fontSize};
//     line-height: ${t.paragraphSmall.lineHeight};
//     text-align: justify;

//     @media (min-width: 768px) {
//       font-size: ${t.paragraphLarge.fontSize};
//       line-height: ${t.paragraphLarge.lineHeight};
//     }
//   }
// `;

// export const CardDev = styled.div`
//   max-width: 640px;
//   padding: 20px;

//   display: flex;
//   flex-direction: column;
//   gap: 20px;

//   background: ${c.neutral500};
//   border: 1px solid ${c.neutral200};

//   &:hover {
//     transition: all 0.1s;
//     border: 2px solid ${c.primary300};
//     box-shadow: -5px 5px 0px ${c.primary300};
//   }

//   path {
//     fill: ${c.primary300};
//   }

//   @media (min-width: 768px) {
//     padding: 40px;
//     flex-direction: row;

//     position: absolute;

//     right: 0 !important;
//     bottom: 0 !important;
//   }

//   > div {
//     display: flex;
//     align-items: center;

//     svg {
//       max-width: 60px;

//       @media (min-width: 768px) {
//         max-width: 70px;
//       }
//     }
//   }

//   span {
//     color: ${c.neutral200};
//     font-size: ${t.paragraphSmall.fontSize};
//     line-height: ${t.paragraphSmall.lineHeight};
//     text-align: justify;

//     @media (min-width: 768px) {
//       font-size: ${t.paragraphLarge.fontSize};
//       line-height: ${t.paragraphLarge.lineHeight};
//     }
//   }
// `;
