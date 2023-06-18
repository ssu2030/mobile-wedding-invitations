import React, { useState, useEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";

import LoadingComponent from "component/LoadingComponent";

const LazyIntroPageComponent = React.lazy(() => import("page/IntroPageComponent"));
const LazyDialogComponent = React.lazy(() => import("component/DialogComponent"));


import styles from "style/MainPage.module.scss";

const MainPageComponent: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const currentUrl = useLocation();

  useEffect(() => {
    if (currentUrl.pathname !== "/invitation" ) {
      const timeout = setTimeout(() => {
        setDialogOpen(true);
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.centerDivision}>
        <Suspense fallback={<LoadingComponent/>} >  
          <LazyIntroPageComponent />
          <LazyDialogComponent
            isOpen={dialogOpen}
            handleClose={() => {
              setDialogOpen(false);
            }}
          /> 
        </Suspense> 
        </div>
    </div>
  );
};

export default MainPageComponent;
