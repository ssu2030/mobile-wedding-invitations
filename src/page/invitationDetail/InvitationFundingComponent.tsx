import React from "react";

import styles from "style/contents/InvitationFunding.module.scss";

const InvitationFundingComponent: React.FC = () => {
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.outter}>
                <div className={styles.grid}></div>
                <div className={styles.lines}></div>
                <h1 className={styles.h1Styles}>
                    <span >Funding</span>
                    <span  >Funding</span>
                </h1>
                <h2 className={styles.h2Style}>Marriage for dongho semi</h2>
            </div>
        </div>);
}

export default InvitationFundingComponent;