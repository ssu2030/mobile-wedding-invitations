import React from "react";
import styles from "style/contents/InvitationIntroDate.module.scss";

const InvitationIntroDateComponent: React.FC = () => {
    return (
        <div className={styles.outter}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.textWrapper}>
                        10월 22일 일요일 <br />
                        오후 12:00 남산예술원
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvitationIntroDateComponent;
