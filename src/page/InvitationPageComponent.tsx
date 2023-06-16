import React from "react";
import { useNavigate } from "react-router-dom";

const InvitationPageComponent: React.FC = () => {
  const navigate = useNavigate();

  const handlerBackButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <input type="button" onClick={handlerBackButtonClick} />
      디스크립션 페이지
    </>
  );
};

export default InvitationPageComponent;
