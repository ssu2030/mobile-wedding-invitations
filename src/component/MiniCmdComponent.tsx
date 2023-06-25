import React from 'react';
import styles from 'style/MiniCmd.module.scss';

const MiniCmdComponent = () => {
  return (
    <div className={styles.cmdWindow}>
      <div className={styles.titleBar}>
        <div className={styles.titleBarBtns}>
          <div className={`${styles.titleBarBtn} ${styles.close}`} />
          <div className={`${styles.titleBarBtn} ${styles.minimize}`} />
          <div className={`${styles.titleBarBtn} ${styles.expand}`} />
        </div>
        <div className={styles.titleBarTitle}>Cmd Window</div>
      </div>
      <div className={styles.content}>
        {/* 내용 */}
      </div>
    </div>
  );
};

export default MiniCmdComponent;
