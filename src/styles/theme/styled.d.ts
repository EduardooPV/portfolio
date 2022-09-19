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
      logoEduardo: string;
      logoDev: string;
      logoPrado: string;
      barCard: string;
      descriptionCard: string;

      titlePost: string;
      descriptionPost: string;
      datePost: string;
      backgroundPost: string;
      backgroundPrePost: string;
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
      logoEduardo: string;
      logoDev: string;
      logoPrado: string;
      barCard: string;
      descriptionCard: string;

      titlePost: string;
      descriptionPost: string;
      datePost: string;
      backgroundPost: string;
      backgroundPrePost: string;
    };
  }
}
