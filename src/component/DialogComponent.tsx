import React from 'react';
import styles from 'style/DialogComponent.module.scss';

interface DialogProps {
  isOpen: boolean;
  handleClose: ()=> void;
}

const DialogComponent: React.FC<DialogProps> = ({  isOpen, handleClose }) => {
  

  return (
    <div>
      {isOpen && (
        <div className={styles.dialogWrapper}>
          <div className={styles.dialogContentWrapper}>
              <div className={styles.dialogContentTextContent}>
              {"함께 자리를 빛내주시겠습니까"}
              </div>
              <div className={styles.dialogContentCheckBoxContent}>
                <label className={styles.labelStyle}><input className={styles.checkboxStyles} type="checkbox"/> Yes </label>
                <label className={styles.labelStyle}><input className={styles.checkboxStyles} type="checkbox"/> Sorry </label>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DialogComponent;