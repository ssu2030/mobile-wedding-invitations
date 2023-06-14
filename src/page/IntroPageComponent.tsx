import React from 'react';
import introVideo_mp4 from '@video/intro_page_video.mp4'
import introVideo_webm from '@video/intro_page_video.webm';

const IntroPageComponent:React.FC = () => {

    return ( 
    <>
      <video autoPlay loop muted>
        <source src={introVideo_webm} type="video/webm"/>
        <source src={introVideo_mp4} type="video/mp4"/>
      </video>
    </>);
}

export default IntroPageComponent;