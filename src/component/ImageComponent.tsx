import React from "react";

import { ImageComponentProps, contentResource } from "common/DataTypes";

const ImageComponent: React.FC<ImageComponentProps> = ({
  resources,
}: ImageComponentProps) => {
  const resourcesArray: React.JSX.Element[] = resources.map(
    (resource: contentResource) => {
      if (resource.type === undefined) {
        return (
          <img src={resource.resourcePath} alt={"error on image resource"} />
        );
      } else {
        return <source srcSet={resource.resourcePath} type={resource.type} />;
      }
    }
  );

  return <picture>{resourcesArray}</picture>;
};

export default ImageComponent;
