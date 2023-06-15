import React from "react";

import { VideoComponentProps, contentResource } from "common/DataTypes";

const VideoComponent: React.FC<VideoComponentProps> = ({
  resources,
}: VideoComponentProps) => {
  const resourcesArray: React.JSX.Element[] = resources.map(
    (resource: contentResource) => {
      return <source src={resource.resourcePath} type={resource.type} />;
    }
  );
  return (
    <video autoPlay loop muted>
      {resourcesArray}
    </video>
  );
};

export default VideoComponent;
