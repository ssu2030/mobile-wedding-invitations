import React, { useEffect, useRef } from "react";

import lottie from "lottie-web";
import animationData from "resource/bottomflower.json";

import styles from "style/contents/InvitationMessage.module.scss";

const InvitationMessageComponent: React.FC = () => {
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

    return (
        <div className={styles.messageWrapper}>
            <div className={styles.textWrapper}>
                이정식 · 서수원 의 장남 이동호 <br />
                이운기 · 김혜련 의 장녀 이세미 <br />
            </div>
            <div className={styles.textWrapper}>
                스물셋, 스물넷에 만나 <br />
                예쁘게 연애한 지 8년, <br />
                <br />
            </div>
            <div className={styles.textWrapper}>
                돌이켜보면 자신에 대한 기억보다 <br />
                서로에 대한 기억이 많은것 같습니다. <br />
                <br />
            </div>
            <div className={styles.textWrapper}>
                지금보다 더 많이 아끼고 배려하겠습니다. <br />
                저희의 더 큰 사랑의 시작을 함께하는 날 <br />
                축복과 격려 부탁드립니다. <br />
            </div>
            <div className={styles.animationWrapper}>
                <div ref={container} />
            </div>
        </div>
    );
};
export default InvitationMessageComponent;
