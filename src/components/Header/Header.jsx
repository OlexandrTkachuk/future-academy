import { Container } from 'components/Container/Container.styled';
import logo from '../../images/Logo.svg';
import {
  LocationWrapper,
  Logo,
  Navigation,
  StyledLink,
  User,
  Wrapper,
} from './Header.styled';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <StyledLink to="/">
          <Logo src={logo} alt="logo" />
        </StyledLink>

        <Navigation>
          <StyledLink to="/courses">All courses</StyledLink>
          <StyledLink to="/events">Events</StyledLink>
          <StyledLink to="/base">Knowledge base</StyledLink>
          <StyledLink to="/career">Career</StyledLink>
        </Navigation>

        <User>
          <LocationWrapper>California</LocationWrapper>

          <a href="tel:+380985554433">+38 (098) 555 44-33</a>
        </User>
      </Wrapper>
    </Container>
  );
};

export default Header;
