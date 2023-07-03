import React from "react";

import styles from "style/InvitationPageComponent.module.scss";
import InvitationMessageComponent from "./invitationDetail/InvitationMessageComponent";
import InvitationIntroMessageComponent from "./invitationDetail/InvitationIntroMessageComponent";
import InvitationGalleryProfileComponent from "./invitationDetail/InvitationGalleryProfileComponent";
import InvitationMapComponent from "./invitationDetail/InvitationMapComponent";
import InvitationFundingComponent from "./invitationDetail/InvitationFundingComponent";
import InvitationCalenderComponent from "./invitationDetail/InvitationCalenderComponent";

const InvitationPageComponent: React.FC = () => {
    return (
        <div className={styles.mainWrapper} style={{ background: "black" }}>
            <div className={styles.centerDivision}>
                <div className={styles.contentWrapper}>
                    <InvitationIntroMessageComponent />
                    <InvitationCalenderComponent year={2023} month={10} />
                    <InvitationMapComponent />
                    <InvitationMessageComponent />
                    <InvitationGalleryProfileComponent />
                    <InvitationFundingComponent />
                </div>
            </div>
        </div>
    );
};
export default InvitationPageComponent;
