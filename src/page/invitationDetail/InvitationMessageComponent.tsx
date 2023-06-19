import React from "react";

import styles from "style/contents/InvitationMessage.module.scss";

const InvitationMessageComponent: React.FC = () => {
  return (
    <div className={styles.messageWrapper}>
      스물셋, 스물넷에 만나 <br />
      예쁘게 연애한 지 8년, <br />
      돌이켜보면 자신에 대한 기억보다 <br />
      서로에 대한 기억이 많은것 같습니다. <br />
      <br />
      지금보다 더 많이 아끼고 배려하겠습니다. <br />
      저희의 더 큰 사랑의 시작을 함께하는 날 <br />
      축복과 격려 부탁드립니다. <br />
    </div>
  );
};
export default InvitationMessageComponent;
