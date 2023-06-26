import React, { useEffect, useState } from "react";

import MiniCmdComponent from "component/MiniCmdComponent";

import styles from "style/contents/InvitationFunding.module.scss";

const InvitationFundingComponent: React.FC = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [input, setInputs] = useState<{
        name: string;
        account: string;
        bankName: string;
    }>({
        name: "dongho",
        account: "22040204232474",
        bankName: "국민",
    });

    useEffect(() => {
        const preload = import("component/MiniCmdComponent");
    }, []);

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.buttonOutter}>
                    <div className={styles.buttonWrapper}>
                        <div className={styles.buttonItemWrapper}>
                            <button
                                className={styles.menButton}
                                onClick={() => {
                                    setInputs({
                                        name: "dongho",
                                        account: "22040204232474",
                                        bankName: "국민",
                                    });
                                    setDialogOpen(true);
                                }}
                            >
                                {"DONGHO"}
                            </button>
                        </div>
                        <div className={styles.buttonItemWrapper}>
                            <button
                                className={styles.womenButton}
                                onClick={() => {
                                    setInputs({
                                        name: "semi",
                                        account: "11035564626299",
                                        bankName: "신한",
                                    });
                                    setDialogOpen(true);
                                }}
                            >
                                {"SEMI"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.outter}>
                    <div className={styles.grid}></div>
                    <div className={styles.lines}></div>
                    <h1 className={styles.h1Styles}>
                        <span>Funding</span>
                        <span>Funding</span>
                    </h1>
                    <h2 className={styles.h2Style}>for dongho semi</h2>
                </div>
            </div>
            {dialogOpen && (
                <MiniCmdComponent
                    isOpen={dialogOpen}
                    handleClose={() => {
                        setDialogOpen(false);
                    }}
                    name={input.name}
                    account={input.account}
                    bankName={input.bankName}
                />
            )}
        </>
    );
};

export default InvitationFundingComponent;
