import * as React from 'react';
import styled from 'styled-components';

import Container from '../layout/Container';

const Menu = styled.ul`
  height: 100px;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
`;

const MenuLink = styled.li`
  font-family: 'Raleway', sans-serif;
  color: var(--main-color);
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  display: inline-flex;

  & + & {
    margin-left: 18px;
  }
`;

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-primary);
  color: #fff;
  padding-top: 75px;
  padding-bottom: 276px;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 86%);

  h1 {
    font-size: 48px;
  }
`;

const HeroSubElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  max-width: 400px;
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  
  h2 {
    color: #02066F;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
  }
  
  img {
    width: 520px;
  }
`;

function Header() {
  return (
    <header>
      <Container>
        <Menu>
          <MenuLink>Home</MenuLink>
          <MenuLink>About</MenuLink>
        </Menu>
      </Container>

      <HeroWrapper>
        <h1>Javid Asgarov</h1>
      </HeroWrapper>

      <Container>
        <HeroSubElement>
          <h2>Here to help you with web development</h2>

          <img src="assets/images/js_hero.png" alt="" />
        </HeroSubElement>
      </Container>
    </header>
  );
}

export default Header;
