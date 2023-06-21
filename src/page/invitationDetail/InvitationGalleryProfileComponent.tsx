import React from "react";

import profileVideoWebm from "@video/profileVideoWEBM.webm";
import profileVideoMp4 from "@video/profileVideoMP4.mp4";
import { contentResource } from "common/DataTypes";
import VideoComponent from "component/VideoComponent";

import backButton from "@photo/backButton.webp";

import styles from "style/contents/InvitationGalleryProfile.module.scss";
import { useNavigate } from "react-router-dom";

const InvitationGalleryProfileComponent: React.FC = () => {
  const navigate = useNavigate();
  const handlerBackButtonClick = () => {
    navigate("/");
  };

  const profileVideoResource: contentResource[] = [
    {
      resourcePath: profileVideoWebm,
      type: "video/webm",
    },
    {
      resourcePath: profileVideoMp4,
      type: "video/mp4",
    },
  ];
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className={styles.profile}>
        <div className={styles.idSection}>
          <img
            src={backButton}
            alt=""
            style={{ width: "24px", height: "24px", marginRight: "10%" }}
            onClick={handlerBackButtonClick}
          />
          <div className={styles.idWrapper}> {"howls.movings.castles"}</div>
        </div>
        <div className={styles.profileTop}>
          <div className={styles.profileImage}>
            <VideoComponent
              resources={profileVideoResource}
              width={"100"}
              height={"100"}
              isCircle={true}
            />
          </div>
          <div className={styles.profileStats}>
            <div className={styles.profileStatsItemBox}>
              <div className={styles.profileStatsItemNumber}>1022</div>
              <div className={styles.profileStatsItemValue}>게시물</div>
            </div>
            <div className={styles.profileStatsItemBox}>
              <div className={styles.profileStatsItemNumber}>2023</div>
              <div className={styles.profileStatsItemValue}>팔로워</div>
            </div>
            <div className={styles.profileStatsItemBox}>
              <div className={styles.profileStatsItemNumber}>3132</div>
              <div className={styles.profileStatsItemValue}>팔로잉</div>
            </div>
          </div>
        </div>
        <div className={styles.profileBottom}>
          <div className={styles.profileTextArea}>
            <div style={{ fontWeight: "bold", fontSize: "16px" }}>
              세미와 동호 <br />
            </div>
            <div style={{ fontSize: "14px" }}>Wedding Gallery 📷</div>
          </div>
          <div className={styles.profileButtonArea}>
            <button className={styles.followButtonStyle}>팔로우 +</button>
            <button className={styles.messageButtonStyle}>메세지</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationGalleryProfileComponent;
