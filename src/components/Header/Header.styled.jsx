import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
`;

export const Logo = styled.img``;

export const Navigation = styled.nav`
  display: flex;
  gap: 40px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const LocationWrapper = styled.div``;
