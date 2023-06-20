import React, { useEffect, useRef } from "react";

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
    <div className={styles.outWrapper}>
      <div className={styles.headerMessageWrapper}>{"Wedding Invitation"}</div>
      <div className={styles.mainWrapper}>
        <div className={styles.imageWrapper}>
          <ImageComponent resources={imageResource} />
        </div>
        <div className={styles.lottieAnimationWrapper}>
          <div ref={container} className={styles.lottieAnimation} />
        </div>
      </div>
    </div>
  );
};
export default InvitationIntroMessageComponent;
