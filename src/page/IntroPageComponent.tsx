import React from "react";

import { contentResource } from "common/DataTypes";
import ImageComponent from "component/ImageComponent";
import intro_img from "@photo/intro_img.webp";
import daisy_img from "@photo/daisyicon.png";
// import introVideo_mp4 from "@video/intro_page_video.mp4";
// import introVideo_webm from "@video/intro_page_video.webm";

import styles from "style/MainPage.module.scss";

const IntroPageComponent: React.FC = () => {
  const imageResource: contentResource[] = [
    { resourcePath: intro_img, type: "image/webp" },
  ];
  return (
    <div>
      <ImageComponent resources={imageResource} />
      <div className={styles.firstLinetext}>
        이 <br /> 동<br /> 호 <br /> ,
        <br /> 이 <br /> 세<br /> 미
      </div>
      <div className={styles.textOutWrapper}>
        <div className={styles.textWrapper}>
          <div className={styles.secondLinetext}>10월 22일 오후 12시</div>
          <div className={styles.thirdLinetext}>서울 남산예술원</div>
        </div>
      </div>
    </div>
  );
};

export default IntroPageComponent;
