import React, { useEffect, useRef, useState } from "react";
import { contentResource } from "common/DataTypes";
import ImageComponent from "component/ImageComponent";
import intro_img from "@photo/intro_img.webp";
import * as animationData from "resource/heartAnimation.json";
import lottie from "lottie-web";
import styles from "style/IntroPage.module.scss";
import { useNavigate } from "react-router-dom";

const IntroPageComponent: React.FC = () => {
  const navigate = useNavigate();
  const container = useRef(null);

  const handleClick = () => {
    navigate("/invitation");
  };

  useEffect(() => {
    if (container.current !== null) {
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData.default,
      });
    }
  }, []);

  const imageResource: contentResource[] = [
    { resourcePath: intro_img, type: "image/webp" },
  ];

  return (
    <div className={styles.introPageWrapper}>
      <div className={styles.firstLinetext}>
        이 <br /> 동<br /> 호 <br /> ,
        <br /> 이 <br /> 세<br /> 미
      </div>
      <ImageComponent resources={imageResource} />
      <div className={styles.textOutWrapper}>
        <div className={styles.textWrapper}>
          <div className={styles.secondLinetext}>10월 22일 오후 12시</div>
          <div className={styles.thirdLinetext}>서울 남산예술원</div>
        </div>
        <div className={styles.nextPageAnimationWrapper} onClick={handleClick}>
          <div ref={container} />
        </div>
      </div>
    </div>
  );
};

export default IntroPageComponent;
