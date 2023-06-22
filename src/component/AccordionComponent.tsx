// Accordion.tsx

import React, { FC, useState } from "react";
import styles from "style/Accordion.module.scss";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const AccordionComponent: FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ""}`}>
      <div className={`${styles.accordion__header}`} onClick={toggleIsOpen}>
        <div className={styles.headerText}>{title} </div>
      </div>
      <div
        className={`${styles.accordion__body} ${isOpen ? styles.openBody : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionComponent;
