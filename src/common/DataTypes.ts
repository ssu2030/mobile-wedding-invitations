export type VideoTypes = "video/mp4" |"video/webm";

export type contentResource = {
    resourcePath: string;
    type: VideoTypes | ImageTypes;
}

export interface VideoComponentProps {
    resources: contentResource[];
}

export type ImageTypes = "image/jpeg" | "image/avif" | "image/webp" | undefined;

export interface ImageComponentProps  {
    resources: contentResource[];
    borderRadius?: string;
}
