import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import Container from '../layout/Container';

import * as HeaderCSS from './Header.module.css';

function Header() {
  return (
    <header>
      <Container>
        <ul className={HeaderCSS.menu}>
          <li className={HeaderCSS.menuLink}>Home</li>
          <li className={HeaderCSS.menuLink}>About</li>
        </ul>
      </Container>

      <div className={HeaderCSS.heroWrapper}>
        <h1>Javid Asgarov</h1>
      </div>

      <Container>
        <div className={HeaderCSS.heroSub}>
          <h2>Here to help you with web development</h2>

          <StaticImage
            style={{
              gridArea: '1/1',
              maxWidth: '420px',
              // You can set a maximum height for the image, if you wish.
              // maxHeight: 600,
            }}
            src="../../assets/images/js_hero.png"
            alt="js alt"
          />
        </div>
      </Container>
    </header>
  );
}

export default Header;
