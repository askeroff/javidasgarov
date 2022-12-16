import * as React from 'react';

import * as RecentBlogCss from './RecentBlog.module.css';
import Container from '../layout/Container';
import CenteredFlex from '../ui/Flex/CenteredFlex';
import LandingTitle from '../ui/landing-title/LandingTitle';

function RecentBlog() {
  return (
    <div className={RecentBlogCss.wrapper}>
      <Container>
        <CenteredFlex flexDirection="row-reverse" justifyContent="space-between">
          <LandingTitle>Recent Blog</LandingTitle>
          <ul className={RecentBlogCss.links}>
            <li>
              <a href="/#">How to do sth in Angular</a>
            </li>
            <li>
              <a href="/#">How to do sth in React</a>
            </li>
            <li>
              <a href="/#">Undo Last Git commit message</a>
            </li>
          </ul>
        </CenteredFlex>
      </Container>
    </div>
  );
}

export default RecentBlog;
