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

export interface photoTypes {
    src: string;
    index: number;
    // 추후 thumbnail에 관한 데이터 리소스 경로까지 받을것
}

export const weddingPhotos: photoTypes[] = [
    {
      index: 1,
      src: image1,
    },
    {
      index: 2,
      src: image2,
    },
    {
      index: 3,
      src: image3,
    },
    {
      index: 4,
      src: image4,
    },
    {
      index: 5,
      src: image5,
    },
    {
      index: 6,
      src: image6,
    },
    {
      index: 7,
      src: image7,
    },
    {
      index: 8,
      src: image8,
    },
    {
      index: 9,
      src: image9,
    },
    {
      index: 10,
      src: image10,
    },
    {
      index: 11,
      src: image11,
    },
    {
      index: 12,
      src: image12,
    },
    {
      index: 13,
      src: image13,
    },
    {
      index: 14,
      src: image14,
    },
    {
      index: 15,
      src: image15,
    },
  ];
