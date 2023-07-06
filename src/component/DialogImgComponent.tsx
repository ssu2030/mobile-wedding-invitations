import React from "react";

import styles from "style/DialogImg.module.scss";
import profileImage from "@photo/profile.webp";

interface DialogProps {
    isOpen: boolean;
    handleClose: () => void;
}

const DialogImgComponent: React.FC<DialogProps> = ({ isOpen, handleClose }) => {
    return (
        <div>
            {isOpen && (
                <div className={styles.dialogWrapper} onClick={handleClose}>
                    <img
                        className={styles.dialogContentWrapper}
                        src={profileImage}
                        alt={""}
                    />
                </div>
            )}
        </div>
    );
};

export default DialogImgComponent;
