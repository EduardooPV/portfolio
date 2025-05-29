export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  invisible?: boolean;
}

export interface PropsStyled {
  types?: boolean;
}
