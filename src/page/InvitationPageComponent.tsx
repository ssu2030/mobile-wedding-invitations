import React, { useState } from "react";

import styles from "style/InvitationPageComponent.module.scss";
import InvitationMessageComponent from "./invitationDetail/InvitationMessageComponent";
import InvitationIntroMessageComponent from "./invitationDetail/InvitationIntroMessageComponent";
import InvitationGalleryComponent from "./invitationDetail/InvitationGalleryComponent";
import InvitationGalleryProfileComponent from "./invitationDetail/InvitationGalleryProfileComponent";

const InvitationPageComponent: React.FC = () => {
  const [backgroundColor, setBackgrountColor] = useState("black");

  return (
    <div className={styles.mainWrapper} style={{ background: backgroundColor }}>
      <div className={styles.centerDivision}>
        <input
          type="button"
          onClick={() => {
            setBackgrountColor("black");
          }}
          value={"dark mode"}
        />
        <div className={styles.contentWrapper}>
          <InvitationIntroMessageComponent />
          <InvitationMessageComponent />
          <InvitationGalleryProfileComponent />
          <InvitationGalleryComponent />
        </div>
      </div>
    </div>
  );
};
export default InvitationPageComponent;
