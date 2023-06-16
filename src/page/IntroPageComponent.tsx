import React from "react";
import Lottie from "react-lottie";
import { contentResource } from "common/DataTypes";
import ImageComponent from "component/ImageComponent";
import intro_img from "@photo/intro_img.webp";
import * as animationData from "resource/heartAnimation.json";
// import introVideo_mp4 from "@video/intro_page_video.mp4";
// import introVideo_webm from "@video/intro_page_video.webm";

import styles from "style/IntroPage.module.scss";
import { useNavigate } from "react-router-dom";

const IntroPageComponent: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/invitation");
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default, // animation.json 파일에서 불러온 애니메이션 데이터
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  };

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
        <div className={styles.nextPageAnimationWrapper} onClick={handleClick}>
          <Lottie options={defaultOptions} height={120} width={100} />
        </div>
      </div>
    </div>
  );
};

export default IntroPageComponent;
