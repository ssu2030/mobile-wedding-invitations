import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from 'style/DialogComponent.module.scss';

interface DialogProps {
  isOpen: boolean;
  handleClose: ()=> void;
}

const DialogComponent: React.FC<DialogProps> = ({  isOpen, handleClose }) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
      handleClose();  
      navigate("/invitation");
    };

  const handleSorryClick = () => {
    window.location.reload();
  }
  return (
    <div>
      {isOpen && (
        <div className={styles.dialogWrapper}>
          <div className={styles.dialogContentWrapper}>
              <div className={styles.dialogContentTextContent}>
              {"함께 자리를 빛내주시겠습니까"}
              </div>
              <div className={styles.dialogContentCheckBoxContent}>
                <label className={styles.labelStyle}><input className={styles.checkboxStyles} type="checkbox"
                onClick={handleClick}
                /> Yes </label>
                <label className={styles.labelStyle}><input className={styles.checkboxStyles} type="checkbox" onClick={
                    handleSorryClick
                }/> Sorry </label>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DialogComponent;