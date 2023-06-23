import React from "react";

import ImageComponent from "component/ImageComponent";
import { contentResource } from "common/DataTypes";
import {
  NamsanAddr,
  NamsanLatitude,
  NamsanLongitude,
  NamsanPhoneNumber,
} from "common/WeddingInformation";

import hanMapImage from "@photo/handMap.webp";

import AccordionComponent from "component/AccordionComponent";
import NaverMapComponent from "./NaverMapComponent";

import styles from "style/contents/InvitationMap.module.scss";

const AccodionItemComponent: React.JSX.Element = (
  <>
    <div className={styles.mapDetailInfomationDescriptionItem}>
      <AccordionComponent
        title={"지하철 이용시"}
        children={
          <div className={styles.mapDetailInfomationDescriptionItemExplain}>
            6호선 한강진역: 1번출구 반대방향 - 도보 7분거리 <br />
            1번 출구 - 예식 1시간전 셔틀버스 운행(10~15분 간격)
          </div>
        }
      />
    </div>
    <div className={styles.mapDetailInfomationDescriptionItem}>
      <AccordionComponent
        title={"버스 이용시"}
        children={
          <div className={styles.mapDetailInfomationDescriptionItemExplain}>
            장충단길 입구 하차 - 간선 402, 405 (광화문-장지동 방향), 142, 420,
            407 <br />
            남산예술원 하차 - 402, 405 (장지동-광화문 방향) 한강진역 하차 - 간선
            110, 405 <br />
            서울시 중부기술 교육원, 블루스퀘어 하차 - 간선 142-144, 402, 407 /
            지선 6211
            <br />
          </div>
        }
      />
    </div>

    <div className={styles.mapDetailInfomationDescriptionItem}>
      <AccordionComponent
        title={"자가용 이용시"}
        children={
          <div className={styles.mapDetailInfomationDescriptionItemExplain}>
            경부고속도로-한남대교에서 오실 경우
            <br />
            경부고속도로-한남대교-한남5거리(직진,우측차선)-북한남
            <br />
            삼거리(우회전) -다산로에서 U턴 -소월길(하얏트 방향)-남산맨션 바로 옆
            남산예술원 웨딩홀 <br />
          </div>
        }
      />
    </div>

    <div className={styles.mapDetailInfomationDescriptionItem}>
      <AccordionComponent
        title={"주차안내"}
        children={
          <div className={styles.mapDetailInfomationDescriptionItemExplain}>
            약 180대 주차 가능
          </div>
        }
      />
    </div>

    <div className={styles.mapDetailInfomationDescriptionItem}>
      <AccordionComponent
        title={"현금인출기 없음 안내"}
        children={
          <div className={styles.mapDetailInfomationDescriptionItemExplain}>
            남산 공원에 위치한 야외 웨딩홀로 현금인출기가 따로 없습니다
          </div>
        }
      />
    </div>

    <div className={styles.mapDetailInfomationDescriptionItem}>
      <AccordionComponent
        title={"화환 반입 불가 안내"}
        children={
          <div className={styles.mapDetailInfomationDescriptionItemExplain}>
            바른 결혼 문화 캠페인에 동참하고 있는 착한 웨딩홀로 화환 반입이
            금지되어있음
          </div>
        }
      />
    </div>
  </>
);

const InvitationMapComponent: React.FC = () => {
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
      window.alert("클립보드에 복사되었습니다.");
    } catch (err) {
      window.alert(
        `텍스트 복사 중에 오류가 발생했습니다. \n [ERROR LOG]: ${err}`
      );
    }
  };

  return (
    <div className={styles.mapWrapper}>
      <div className={styles.titleWrapper}> {"* 오시는 길 *"} </div>

      <ImageComponent resources={contentResource2} />
      <div className={styles.detailInformationWrapper}>
        <div className={styles.detailInformationPhone}>
          <div
            className={styles.detailInformationPhoneNumberSection}
          >{`남산예술원 웨딩홀 TEL ${NamsanPhoneNumber}`}</div>
          <button
            className={styles.detailInformationPhoneButton}
            onClick={handleCallButtonClick}
          >
            {"전화하기"}
          </button>
        </div>
        <div className={styles.detailInformationPhone}>
          <div className={styles.detailInformationPhoneNumberSection}>
            {NamsanAddr}
          </div>
          <button
            className={styles.detailInformationPhoneButton}
            onClick={handleCopyButtonClick}
          >
            {"복사하기"}
          </button>
        </div>
        <div className={styles.mapDetailInfomationDescription}>
          <AccordionComponent
            title="> 남산 예술원 안내 사항 보기"
            children={AccodionItemComponent}
          />
          <div className=""></div>
        </div>
        <div className={styles.mapDetailInfomationDescription}>
          <AccordionComponent
            title="> 지도 자세히 보기"
            children={
              <>
                <NaverMapComponent />
                <div className={styles.detailInformationMapWithMapDetail}>
                  <div className={styles.mapIconWrapper}>
                    <button
                      className={styles.mapGoButtonStyle}
                      onClick={openNaverMapApp}
                    >
                      {"네이버지도 열기"}
                    </button>
                  </div>
                  <div className={styles.mapIconWrapper}>
                    <button
                      className={styles.mapGoButtonStyle}
                      onClick={openKakaoMapApp}
                    >
                      {"카카오지도 열기"}
                    </button>
                    <button
                      onClick={() => {
                        window.open(
                          "https://namsanartweddinghall.com/blogPost/location"
                        );
                      }}
                    >
                      {"오는길 보기"}
                    </button>
                  </div>
                </div>
              </>
            }
          />
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default InvitationMapComponent;
