import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
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
    const images = weddingPhotos.map((value: photoTypes, index: number) => {
        return {
            original: value.src,
            thumbnail: value.src,
            originalAlt: `Gallery Image ${value.src}`,
        };
    });

    const startIndex = resource
        ? weddingPhotos.findIndex((photo) => photo.index === resource.index)
        : 0;

    return (
        <div>
            {isOpen && (
                <div className={styles.dialogWrapper}>
                    <div className={styles.dialogContentWrapper}>
                        <ImageGallery
                            items={images}
                            startIndex={startIndex}
                            showPlayButton={false}
                            showFullscreenButton={true}
                            disableSwipe={false}
                            onClick={handleClose}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default InvitationGalleryItemDetailComponent;
