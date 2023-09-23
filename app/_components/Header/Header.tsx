import { HeaderProps } from './Header.props';

export const Header: React.FC<HeaderProps> = ({ ...props }): JSX.Element => {
  return <div {...props}>Header</div>;
};
