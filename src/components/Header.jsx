import React from "react";
import { useLocation } from "react-router-dom";
import { SiAircall } from "react-icons/si";

const matchPath = {
  "/": "Activity Feed",
  "/Keypad": "Keypad",
  "/Settings": "Settings",
  "/Contact": "Contact",
  "/ActivityDetails": "Activity Details",
};

const findLocation = (path) => {
  if (path.startsWith("/ActivityDetails")) {
    return path.split("/")[1];
  } else {
    return matchPath[path];
  }
};

const Header = () => {
  const location = useLocation();

  return (
    <header className="h-24 w-full grid grid-cols-3 content-center items-center border-b ">
      <SiAircall className="w-10 h-10 fill-success ml-5" />
      <div className="text-xl text-center">
        {findLocation(location.pathname)}
      </div>
      <div></div>
    </header>
  );
};

export default Header;
