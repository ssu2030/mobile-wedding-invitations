import React from "react";

import styles from "style/contents/InvitationMap.module.scss"
import  ImageComponent  from 'component/ImageComponent';
import { contentResource } from 'common/DataTypes';
import mapImage from '@photo/maptogo.webp';

const InvitationMapComponent:React.FC = () => {
    const contentResource: contentResource[] = [{
        resourcePath: mapImage,
        type:"image/webp"
    }]
    const openKakaoMapApp = () => {
        const latitude = 37.5535; // 서울역 위도
        const longitude = 126.9690; // 서울역 경도
      
        const kakaoMapAppUrl = `kakaomap://look?p=${latitude},${longitude}`;
      
        window.location.href = kakaoMapAppUrl;
      };

    return <div  className={styles.mapWrapper}>
    <div> 오시는 길</div>

    <button onClick={()=>{
        window.open("https://namsanartweddinghall.com/blogPost/location");
    }}> 오는길 보기 </button>
        <button onClick={openKakaoMapApp}> 카카오지도 열기 </button>
    <ImageComponent resources={contentResource}/>
    </div>;
}

export default InvitationMapComponent;