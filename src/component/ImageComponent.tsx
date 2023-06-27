import React from "react";
import { ImageComponentProps, contentResource } from "common/DataTypes";
import styles from "style/ImageComponent.module.scss";

const ImageComponent: React.FC<ImageComponentProps> = ({
    resources,
    borderRadius,
}: ImageComponentProps) => {
    const inputRadius = borderRadius ?? "0px";
    const resourcesArray: React.ReactNode = resources.map(
        (resource: contentResource, index: number) => {
            return (
                <img
                    className={styles.pictureWrapper}
                    key={`${index}_imgComponent`}
                    src={resource.resourcePath}
                    alt={"error on image resource"}
                    style={{ borderRadius: inputRadius }}
                />
            );
        }
    );

    return (
        <picture className={styles.pictureWrapper}>{resourcesArray}</picture>
    );
};

export default ImageComponent;
