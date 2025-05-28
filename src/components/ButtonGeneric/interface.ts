export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  invisible?: boolean;
}

export interface PropsStyled {
  types?: boolean;
}
