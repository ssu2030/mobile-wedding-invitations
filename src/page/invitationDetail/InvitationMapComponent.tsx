import React from "react";

import ImageComponent from "component/ImageComponent";
import { contentResource } from "common/DataTypes";
import mapImage from "@photo/maptogo.webp";
import hanMapImage from "@photo/handMap.webp";

import styles from "style/contents/InvitationMap.module.scss";
import {
  NamsanAddr,
  NamsanLatitude,
  NamsanLongitude,
  NamsanPhoneNumber,
} from "common/WeddingInformation";

const InvitationMapComponent: React.FC = () => {
  const contentResource: contentResource[] = [
    {
      resourcePath: mapImage,
      type: "image/webp",
    },
  ];
  const contentResource2: contentResource[] = [
    {
      resourcePath: hanMapImage,
      type: "image/webp",
    },
  ];

  const handleCallButtonClick = () => {
    const telLink = `tel:${NamsanPhoneNumber}`;
    window.location.href = telLink;
  };

  const openKakaoMapApp = () => {
    const kakaoMapAppUrl = `kakaomap://look?p=${NamsanLatitude},${NamsanLongitude}`;
    window.location.href = kakaoMapAppUrl;
  };

  const openNaverMapApp = () => {
    const naverMapAppUrl = `nmap://place?lat=${NamsanLatitude}&lng=${NamsanLongitude}&appname=com.nhn.android.nmap`;
    window.location.href = naverMapAppUrl;
  };

  const handleCopyButtonClick = async () => {
    try {
      await navigator.clipboard.writeText(NamsanAddr);
      console.log("텍스트가 클립보드에 복사되었습니다.");
    } catch (err) {
      console.error("텍스트 복사 중에 오류가 발생했습니다:", err);
    }
  };

  return (
    <div className={styles.mapWrapper}>
      <div> 오시는 길</div>

      <button
        onClick={() => {
          window.open("https://namsanartweddinghall.com/blogPost/location");
        }}
      >
        {"오는길 보기"}
      </button>
      <button onClick={openKakaoMapApp}> 카카오지도 열기 </button>
      <ImageComponent resources={contentResource} />
      <ImageComponent resources={contentResource2} />
      <div className={styles.detailInformationWrapper}>
        <div className={styles.detailInformationPhone}>
          <div>{`남산예술원 웨딩홀 TEL ${NamsanPhoneNumber}`}</div>
          <button onClick={handleCallButtonClick}>{"call"}</button>
        </div>
        <div className={styles.detailInformationMap}>
          <div>{NamsanAddr}</div>
          <button onClick={handleCopyButtonClick}> {"주소 복사하기"}</button>
        </div>
        <div className={styles.detailInformationMapWithMapDetail}>
          <button className={styles.mapGoButtonStyle} onClick={openNaverMapApp}>
            {"네이버지도 열기"}
          </button>
          <button className={styles.mapGoButtonStyle} onClick={openKakaoMapApp}>
            {"카카오지도 열기"}
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default InvitationMapComponent;
