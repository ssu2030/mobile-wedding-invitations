declare module '*.png';
declare module '*.jpg';
declare module '*.webp';
declare module '*.webm';
declare module '*.mp4';
declare module '*.json';
declare module "*.scss" {
    const content: { [className: string]: string };
    export = content;
}

declare module "*.css" {
    const content: { [className: string]: string };
    export = content;
}

declare module 'react-image-gallery';