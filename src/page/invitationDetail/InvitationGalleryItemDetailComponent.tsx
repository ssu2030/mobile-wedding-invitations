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
                height: "100%",
                objectFit: "cover",
              }}
              alt={`Gallery Image ${resource}`}
              onClick={handleClose}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InvitationGalleryItemDetailComponent;
