import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import IntroPageComponent from "page/IntroPageComponent";
import daisy_img from "@photo/daisyicon.png";
import styles from "style/MainPage.module.scss";
import DialogComponent from "component/DialogComponent";

const MainPageComponent: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const currentUrl = useLocation();

  useEffect(() => {
    
    console.log("@@@@@@", currentUrl)
    if (currentUrl.pathname !== "/invitation" ) {
      const timeout = setTimeout(() => {
        setDialogOpen(true);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.centerDivision}>
        <IntroPageComponent />
        <DialogComponent
          isOpen={dialogOpen}
          handleClose={() => {
            setDialogOpen(false);
          }}
        /></div>
    </div>
  );
};

export default MainPageComponent;
