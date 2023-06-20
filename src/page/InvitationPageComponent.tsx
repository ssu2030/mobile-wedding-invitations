import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "style/InvitationPageComponent.module.scss";
import InvitationMessageComponent from "./invitationDetail/InvitationMessageComponent";
import InvitationIntroMessageComponent from "./invitationDetail/InvitationIntroMessageComponent";

const InvitationPageComponent: React.FC = () => {
  const navigate = useNavigate();
  const [backgroundColor, setBackgrountColor] = useState("black");

  const handlerBackButtonClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.mainWrapper}>
      <div
        className={styles.centerDivision}
        style={{ background: backgroundColor }}
      >
        <input type="button" onClick={handlerBackButtonClick} value={"back"} />
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
        </div>
      </div>
    </div>
  );
};
export default InvitationPageComponent;
