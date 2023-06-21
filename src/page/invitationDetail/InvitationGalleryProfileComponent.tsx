import React from "react";

import image7 from "@photo/gallery/galleryImage07.webp";
import styles from "style/contents/InvitationGalleryProfile.module.scss";

const InvitationGalleryProfileComponent: React.FC = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className={styles.profile}>
        <div className={styles.profileImage}>
          <img src={image7} alt="" />
        </div>
        <div className={styles.profileUserSettings}>
          <h1 className={styles.profileUserName}>세미와 동호</h1>
          <button className={styles.profileEditBtn}>Edit Profile</button>
          <button
            className={styles.profileSettingsBtn}
            aria-label="profile settings"
          >
            <i className={`${styles.fas} ${styles.faCog}`} aria-hidden="true" />
          </button>
        </div>
        <div className={styles.profileStats}>
          <ul>
            <li>
              <span className={styles.profileStatCount}>164</span> posts
            </li>
            <li>
              <span className={styles.profileStatCount}>188</span> followers
            </li>
            <li>
              <span className={styles.profileStatCount}>206</span> following
            </li>
          </ul>
        </div>
        <div className={styles.profileBio}>
          <p>
            <span className={styles.profileRealName}>
              세미와 동호 <br />
            </span>{" "}
            행복한 결혼 생활 📷✈️🏕️
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvitationGalleryProfileComponent;
