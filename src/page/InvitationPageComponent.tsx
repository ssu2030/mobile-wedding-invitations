import React, { useState } from "react";

import styles from "style/InvitationPageComponent.module.scss";
import InvitationMessageComponent from "./invitationDetail/InvitationMessageComponent";
import InvitationIntroMessageComponent from "./invitationDetail/InvitationIntroMessageComponent";
import InvitationGalleryProfileComponent from "./invitationDetail/InvitationGalleryProfileComponent";
import InvitationMapComponent from "./invitationDetail/InvitationMapComponent";

const InvitationPageComponent: React.FC = () => {
    return (
        <div className={styles.mainWrapper} style={{ background: "black" }}>
            <div className={styles.centerDivision}>
                <div className={styles.contentWrapper}>
                    <InvitationIntroMessageComponent />
                    <InvitationMessageComponent />
                    <InvitationGalleryProfileComponent />
                    <InvitationMapComponent />
                </div>
            </div>
        </div>
    );
};
export default InvitationPageComponent;
