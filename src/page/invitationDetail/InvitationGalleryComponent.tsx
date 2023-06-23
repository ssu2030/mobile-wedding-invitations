import React, { useState } from "react";

import InvitationGalleryItemDetailComponent from "./InvitationGalleryItemDetailComponent";
import { photoTypes, weddingPhotos } from "common/Data";

const GalleryRow: React.FC<{ images: photoTypes[] }> = ({ images }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pictureResource, setPictureResource] = useState("");

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {images.map((image, index) => (
        <div
          style={{
            flexBasis: "33.3333%",
            height: "0",
            paddingBottom: "30%",
            position: "relative",
            overflow: "hidden",
          }}
          key={`Gallery Image ${index}`}
          onClick={() => {
            setPictureResource(image.src);
            setDialogOpen(true);
          }}
        >
          <img
            src={image.src}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            key={`Gallery Image ${index}`}
            alt={`Gallery Image ${index}`}
          />
        </div>
      ))}

      <InvitationGalleryItemDetailComponent
        resource={pictureResource}
        isOpen={dialogOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

const InvitationGalleryComponent: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <GalleryRow images={weddingPhotos} />
    </div>
  );
};

export default InvitationGalleryComponent;
