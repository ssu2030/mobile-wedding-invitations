import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPageComponent from "MainPageComponent";
import InvitationPageComponent from "page/InvitationPageComponent";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 루트 경로에 대한 컴포넌트 설정 */}
        <Route path="/" element={<MainPageComponent />} />

        {/* /mainPage/invitation 경로에 대한 컴포넌트 설정 */}
        <Route path="/invitation" element={<InvitationPageComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
