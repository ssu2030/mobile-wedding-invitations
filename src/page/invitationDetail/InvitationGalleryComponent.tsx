import React from "react";

import image1 from "@photo/gallery/galleryImage01.webp";
import image2 from "@photo/gallery/galleryImage02.webp";
import image3 from "@photo/gallery/galleryImage03.webp";
import image4 from "@photo/gallery/galleryImage04.webp";
import image5 from "@photo/gallery/galleryImage05.webp";
import image6 from "@photo/gallery/galleryImage06.webp";
import image7 from "@photo/gallery/galleryImage07.webp";
import image8 from "@photo/gallery/galleryImage08.webp";
import image9 from "@photo/gallery/galleryImage09.webp";
import image10 from "@photo/gallery/galleryImage10.webp";
import image11 from "@photo/gallery/galleryImage11.webp";
import image12 from "@photo/gallery/galleryImage12.webp";
import image13 from "@photo/gallery/galleryImage13.webp";
import image14 from "@photo/gallery/galleryImage14.webp";
import image15 from "@photo/gallery/galleryImage15.webp";

interface photo {
  src: string;
}

const photos: photo[] = [
  {
    src: image1,
  },
  {
    src: image2,
  },
  {
    src: image3,
  },
  {
    src: image4,
  },
  {
    src: image5,
  },
  {
    src: image6,
  },
  {
    src: image7,
  },
  {
    src: image8,
  },
  {
    src: image9,
  },
  {
    src: image10,
  },
  {
    src: image11,
  },
  {
    src: image12,
  },
  {
    src: image13,
  },
  {
    src: image14,
  },
  {
    src: image15,
  },
];
const GalleryRow: React.FC<{ images: photo[] }> = ({ images }) => (
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
          alt={`Gallery Image ${index}`}
        />
      </div>
    ))}
  </div>
);

const InvitationGalleryComponent: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <GalleryRow images={photos} />
    </div>
  );
};

export default InvitationGalleryComponent;
