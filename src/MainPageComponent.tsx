import React from "react";
import { useNavigate } from "react-router-dom";

import IntroPageComponent from "page/IntroPageComponent";
import daisy_img from "@photo/daisyicon.png";
import styles from "style/MainPage.module.scss";

// 8년전 어느날 부터
// 나에 대한 기억보다, 서로에 대한 기억이 더 많은 우리가 되었습니다.
// 앞으로 모든순간들을 함께하려고합니다.
const MainPageComponent: React.FC = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.centerDivision}>
        <IntroPageComponent />
      </div>
    </div>
  );
};

export default MainPageComponent;
