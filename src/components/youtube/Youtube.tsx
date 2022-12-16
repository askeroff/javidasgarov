import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Container from '../layout/Container';
import LandingTitle from '../ui/landing-title/LandingTitle';
import CenteredFlex from '../ui/Flex/CenteredFlex';

import * as YoutubeCSS from './Youtube.module.css';

function Youtube() {
  return (
    <div className={YoutubeCSS.youtubeRelativeWrapper}>
      <StaticImage
        style={{
          gridArea: '1/1',
          maxWidth: '420px',
          position: 'absolute',
          right: '70px',
          bottom: '170px',
          zIndex: '2',
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        src="../../assets/images/youtube_illustration.svg"
        alt="js alt"
      />
      <div className={YoutubeCSS.youtubeWrapper}>
        <Container>
          <CenteredFlex justifyContent="space-between">
            <div>
              <LandingTitle>Hello youtube</LandingTitle>
              <div className={YoutubeCSS.landingBlockDescription}>
                Check out my youtube channel. I post lessons on Angular, React,
                testing code and other stuff that might help you with web
                development!
              </div>
            </div>
          </CenteredFlex>
        </Container>
      </div>
    </div>
  );
}

export default Youtube;
