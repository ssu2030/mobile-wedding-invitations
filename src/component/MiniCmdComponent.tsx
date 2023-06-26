import React from "react";
import styles from "style/MiniCmd.module.scss";

interface IProps {
    isOpen: boolean;
    handleClose: () => void;
    name: string;
    account: string;
    bankName: string;
}

const MiniCmdComponent: React.FC<IProps> = ({
    isOpen,
    handleClose,
    name,
    account,
    bankName,
}) => {
    return (
        <>
            {isOpen && (
                <div className={styles.outterWrapper}>
                    <div className={styles.dialogWrapper}>
                        <div className={styles.cmdWindow}>
                            <div className={styles.titleBar}>
                                <div className={styles.titleBarBtns}>
                                    <div
                                        className={`${styles.titleBarBtn} ${styles.close}`}
                                        onClick={handleClose}
                                    />
                                    <div
                                        className={`${styles.titleBarBtn} ${styles.minimize}`}
                                        onClick={handleClose}
                                    />
                                    <div
                                        className={`${styles.titleBarBtn} ${styles.expand}`}
                                        onClick={handleClose}
                                    />
                                </div>
                                <div className={styles.titleBarTitle}>
                                    {`${name}'s Account Information`}
                                </div>
                            </div>
                            <div className={styles.content}>
                                {`bank Info: ${bankName}`} <br />
                                {`account Info: ${account}`} <br />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MiniCmdComponent;
