import React from "react";

import { VideoComponentProps, contentResource } from "common/DataTypes";

const VideoComponent: React.FC<VideoComponentProps> = ({
  resources,
  width,
  height,
  isCircle = false,
}: VideoComponentProps) => {
  const videoWidth = width !== undefined ? `${width}px` : "100%";
  const videoHeight = height !== undefined ? `${height}px` : "100%";
  const resourcesArray: React.JSX.Element[] = resources.map(
    (resource: contentResource, index: number) => {
      return (
        <source
          key={`${index}_videoComponent`}
          src={resource.resourcePath}
          type={resource.type}
        />
      );
    }
  );

  return (
    <video
      autoPlay
      loop
      muted
      style={{
        width: videoWidth,
        height: videoHeight,
        borderRadius: isCircle === true ? "50%" : "0%",
      }}
    >
      {resourcesArray}
    </video>
  );
};

export default VideoComponent;
