import { NavBarProps } from '../navbar/NavBar.types';
import { FooterProps } from '../footer/Footer.types';

export interface LayoutProps {
  navbarProps?: NavBarProps;
  footerProps?: FooterProps;
  mainMarginLeft?: string;
}
