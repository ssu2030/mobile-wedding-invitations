import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoadingComponent from "component/LoadingComponent";

const LazyMainPageComponent = React.lazy(() => import("MainPageComponent"));
const LazyInvitaionComponent = React.lazy(
  () => import("page/InvitationPageComponent")
);

const App = () => {
  useEffect(() => {
    import("page/InvitationPageComponent");
  }, []);
  return (
    <Router>
      <Routes>
        {/* 루트 경로에 대한 컴포넌트 설정 */}
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingComponent />}>
              <LazyMainPageComponent />
            </Suspense>
          }
        />
        {/* /mainPage/invitation 경로에 대한 컴포넌트 설정 */}
        <Route
          path="/invitation"
          element={
            <Suspense fallback={<LoadingComponent />}>
              <LazyInvitaionComponent />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
