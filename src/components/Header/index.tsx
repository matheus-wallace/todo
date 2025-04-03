import { HeaderContainer } from './styles';
import logo from '../../assets/Logo.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo TODO" />
    </HeaderContainer>
  );
};

export default Header;
