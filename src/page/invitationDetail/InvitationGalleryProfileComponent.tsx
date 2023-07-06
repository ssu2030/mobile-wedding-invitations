import React, { useState } from "react";

import backButton from "@photo/backButton.webp";
import profileImage from "@photo/profile.webp";

import styles from "style/contents/InvitationGalleryProfile.module.scss";
import { useNavigate } from "react-router-dom";
import InvitationGalleryComponent from "./InvitationGalleryComponent";
import down_img from "@photo/icon/down.png";
import DialogImgComponent from "component/DialogImgComponent";

const InvitationGalleryProfileComponent: React.FC = () => {
    const navigate = useNavigate();
    const [follow, setFollow] = useState(false);
    const [open, setOpen] = useState(false);
    const [follower, setFollower] = useState(2023);

    const handleProfileImgClick = () => {
        setOpen(false);
    };

    const handlerBackButtonClick = () => {
        navigate("/");
    };

    const handleFollowButtonClick = () => {
        window.alert("기능 구현 중 입니다");
    };

    const handleFollowClick = () => {
        if (follow === false) {
            setFollow(true);
            setFollower(2024);
        } else {
            setFollow(false);
            setFollower(2023);
        }
    };

    return (
        <div style={{ backgroundColor: "white" }}>
            <div className={styles.profile}>
                <div className={styles.idSection}>
                    <img
                        src={backButton}
                        alt=""
                        style={{
                            width: "24px",
                            height: "24px",
                            marginRight: "10%",
                        }}
                        onClick={handlerBackButtonClick}
                    />
                    <div className={styles.idWrapper}> {"semi.and.dongho"}</div>
                </div>
                <div className={styles.profileTop}>
                    <div
                        className={styles.profileImage}
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        <img
                            className={styles.profileImage}
                            src={profileImage}
                            alt={""}
                            onClick={() => {
                                setOpen(true);
                            }}
                        />
                    </div>
                    <div className={styles.profileStats}>
                        <div className={styles.profileStatsItemBox}>
                            <div className={styles.profileStatsItemNumber}>
                                1022
                            </div>
                            <div className={styles.profileStatsItemValue}>
                                게시물
                            </div>
                        </div>
                        <div className={styles.profileStatsItemBox}>
                            <div className={styles.profileStatsItemNumber}>
                                {`${follower}`}
                            </div>
                            <div className={styles.profileStatsItemValue}>
                                팔로워
                            </div>
                        </div>
                        <div className={styles.profileStatsItemBox}>
                            <div className={styles.profileStatsItemNumber}>
                                3132
                            </div>
                            <div className={styles.profileStatsItemValue}>
                                팔로잉
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.profileBottom}>
                    <div className={styles.profileTextArea}>
                        <div style={{ fontWeight: "bold", fontSize: "1rem" }}>
                            세미와 동호 <br />
                        </div>
                        <div style={{ fontSize: "0.8rem" }}>
                            WEDDING GALLERY 📷
                        </div>
                    </div>
                    <div className={styles.profileButtonArea}>
                        <button
                            className={
                                follow === false
                                    ? styles.followButtonStyle
                                    : styles.follingButtonStyle
                            }
                            onClick={handleFollowClick}
                        >
                            {follow === false ? "팔로우 +" : "팔로잉 "}
                            {follow && (
                                <span>
                                    <img
                                        src={down_img}
                                        alt=""
                                        style={{ width: "0.7rem" }}
                                    />
                                </span>
                            )}
                        </button>
                        <button
                            className={styles.messageButtonStyle}
                            onClick={handleFollowButtonClick}
                        >
                            메세지
                        </button>
                    </div>
                </div>
            </div>
            <InvitationGalleryComponent />
            {open && (
                <DialogImgComponent
                    isOpen={open}
                    handleClose={handleProfileImgClick}
                />
            )}
        </div>
    );
};

export default InvitationGalleryProfileComponent;
