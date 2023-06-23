import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { photoTypes, weddingPhotos } from "common/Data";

import styles from "style/contents/InvitationGalleryItemDetail.module.scss";

interface IProps {
  resource: photoTypes | undefined;
  isOpen: boolean;
  handleClose: () => void;
}

const InvitationGalleryItemDetailComponent: React.FC<IProps> = ({
  resource,
  isOpen,
  handleClose,
}: IProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: resource === undefined ? 0 : resource.index - 1,
  };

  const images = weddingPhotos.map((value: photoTypes, index: number) => {
    return (
      <img
        src={value.src}
        className={styles.photoStyle}
        alt={`Gallery Image ${value.src}`}
        onClick={handleClose}
        key={`photoNumber-${index}`}
      />
    );
  });

  return (
    <div>
      {isOpen && (
        <div className={styles.dialogWrapper}>
          <div className={styles.dialogContentWrapper}>
            <Slider {...settings}>{images}</Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvitationGalleryItemDetailComponent;
