import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "resource/ConfetiAnimation.json";
import confeti_img from "@photo/confetiImage.webp";
import daisy_img from "@photo/daisyInvitation.webp";
import { contentResource } from "common/DataTypes";
import ImageComponent from "component/ImageComponent";

import styles from "style/contents/InvitationIntroMessage.module.scss";
import InvitationIntroDateComponent from "./InvitationIntroDateComponent";

const InvitationIntroMessageComponent: React.FC = () => {
    const container = useRef(null);

    useEffect(() => {
        if (container.current !== null) {
            lottie.loadAnimation({
                container: container.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: animationData,
            });
        }
    }, []);

    const imageResource: contentResource[] = [
        { resourcePath: confeti_img, type: "image/webp" },
    ];

    return (
        <div className={styles.outWrapper}>
            <div className={styles.headerMessageWrapper}>
                <div className={styles.textWrapper}>{"Wedding Invitation"}</div>
                <img src={daisy_img} alt="" className={styles.daisyWrapper} />
            </div>
            <div className={styles.mainWrapper}>
                <div className={styles.imageWrapper}>
                    <ImageComponent resources={imageResource} />
                </div>
                <div className={styles.imageTextWrapper}>
                    <InvitationIntroDateComponent />
                </div>

                <div className={styles.lottieAnimationWrapper}>
                    <div className={styles.lottieAnimation} ref={container} />
                </div>
            </div>
        </div>
    );
};

export default InvitationIntroMessageComponent;
