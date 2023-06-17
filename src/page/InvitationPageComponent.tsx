import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "style/InvitationPageComponent.module.scss"

const InvitationPageComponent: React.FC = () => {
  const navigate = useNavigate();
  const [backgroundColor, setBackgrountColor] =useState("black");

  const handlerBackButtonClick = () => {
    navigate("/");
  };

  return (
      <div className={styles.mainWrapper}>
        <div className={styles.centerDivision} style={{background: backgroundColor}} >
          <input type="button" onClick={handlerBackButtonClick} value={"sss"} />
          <input type="button" onClick={()=>{setBackgrountColor("white")}} value={"sss"} />
        </div>
    </div>
    
  );
};
export default InvitationPageComponent;
