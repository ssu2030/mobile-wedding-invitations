import React, { useEffect, useRef, useState } from "react";

import * as animationData from "resource/ConfetiAnimation.json";
import lottie from "lottie-web";
import confeti_img from "@photo/confetiImage.webp";
import { contentResource } from "common/DataTypes";
import ImageComponent from "component/ImageComponent";

import styles from "style/contents/InvitationIntroMessage.module.scss";

const InvitationIntroMessageComponent: React.FC = () => {
  const container = useRef(null);

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
    { resourcePath: confeti_img, type: "image/webp" },
  ];

  return (
    <>
      <div className={styles.headerMessageWrapper}>{"Happy Wedding"}</div>
      <div className={styles.mainWrapper}>
        <div className={styles.imageWrapper}>
          <ImageComponent resources={imageResource} />
        </div>
        <div className={styles.lottieAnimationWrapper}>
          <div ref={container} style={{ width: "430px", height: "600px" }} />
        </div>
      </div>
    </>
  );
};
export default InvitationIntroMessageComponent;
