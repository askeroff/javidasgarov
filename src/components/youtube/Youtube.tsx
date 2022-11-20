import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Container from '../layout/Container';
import LandingTitle from '../ui/landing-title/LandingTitle';
import CenteredFlex from '../ui/Flex/CenteredFlex';

import * as YoutubeCSS from './Youtube.module.css';

function Youtube() {
  return (
    <div className={YoutubeCSS.youtubeWrapper}>
      <Container>
        <CenteredFlex justifyContent="space-between">
          <div>
            <LandingTitle>Hello youtube</LandingTitle>
            <div className="landing-block-description">
              Check out my youtube channel. I post lessons on Angular, React,
              testing code and other stuff that might help you width web
              development!
            </div>
          </div>

          <StaticImage
            style={{
              gridArea: '1/1',
              maxWidth: '420px',
              // You can set a maximum height for the image, if you wish.
              // maxHeight: 600,
            }}
            src="../../assets/images/youtube.png"
            alt="js alt"
          />
        </CenteredFlex>
      </Container>
    </div>
  );
}

export default Youtube;
