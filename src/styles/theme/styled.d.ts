import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;

      background: string;
      backgroundCards: string;
      title: string;
      text: string;
      icon: string;
      footer: string;
      footerText: string;
      barCard: string;
      descriptionCard: string;
    };
  }

  export interface CustomTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;

      background: string;
      backgroundCards: string;
      title: string;
      text: string;
      icon: string;
      footer: string;
      footerText: string;
      barCard: string;
      descriptionCard: string;
    };
  }
}
