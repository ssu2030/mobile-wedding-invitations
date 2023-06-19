import React, { useEffect, useRef } from "react";

import * as animationData from "resource/LoadingAnimation2.json";
import lottie from "lottie-web";

const LoadingComponent: React.FC = () => {
  const container = useRef(null);
  useEffect(() => {
    if (container.current !== null) {
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData.default,
      });
    }
  }, []);

  return (
    <div>
      <div ref={container} />
    </div>
  );
};

export default LoadingComponent;
