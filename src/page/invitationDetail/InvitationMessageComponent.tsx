import React, { useEffect, useState, useRef } from "react";
import styles from "style/contents/InvitationMessage.module.scss";

const YourComponent: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const position = containerRef.current?.scrollTop || 0;
    console.log("@@@@", position);
    setScrollPosition(position);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div
        className={styles.textWrapper}
        style={{ transform: `translateY(-${scrollPosition}px)` }}
      >
        <span className={styles.text}>hi</span>
        <span className={styles.text}>hello</span>
        <span className={styles.text}>hihello</span>
      </div>
    </div>
  );
};

export default YourComponent;
