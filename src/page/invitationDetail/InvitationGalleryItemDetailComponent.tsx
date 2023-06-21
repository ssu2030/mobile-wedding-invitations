import React from "react";

import styles from "style/contents/InvitationGalleryItemDetail.module.scss";

interface IProps {
  resource: string;
  isOpen: boolean;
  handleClose: () => void;
}

const InvitationGalleryItemDetailComponent: React.FC<IProps> = ({
  resource,
  isOpen,
  handleClose,
}: IProps) => {
  return (
    <div>
      {isOpen && (
        <div className={styles.dialogWrapper}>
          <div className={styles.dialogContentWrapper}>
            <img
              src={resource}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "90%",
                marginBottom: "5%",
                objectFit: "cover",
                borderRadius: "5px",
              }}
              alt={`Gallery Image ${resource}`}
              onClick={handleClose}
            />
            
          <div className={styles.photoBottom}>
              hello </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvitationGalleryItemDetailComponent;
