import React, { useState } from "react";
import Dropdown from "react-dropdown";
import { FaPalette } from "react-icons/fa";
import "react-dropdown/style.css";
const listThemes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];
function Settings({ toggleTheme, currentTheme }) {
  const [theme, setTheme] = useState(currentTheme);
  const changeTheme = (item) => {
    setTheme(item.value);
    toggleTheme(item.value);
  };

  return (
    <div className=" w-full max-w-full h-full ">
      <div class="border flex justify-start items-start my-5 mx-5 h-fit rounded-full text-left align-center p-2">
        <div className="flex items-center  justify-center w-full ">
          <FaPalette className="w-5 h-5 mr-3" />
          <div className="h-auto mr-5">
            <h3>Theme</h3>
          </div>
          <Dropdown
            options={listThemes}
            onChange={changeTheme}
            value={theme}
            placeholder="Select an theme"
            className="btn btn-base btn-block h-fit w-1/2 rounded p-0"
            controlClassName="!btn !btn-base btn-block w-full"
            menuClassName="dropdown-content !menu p-2 shadow !bg-base-100 rounded-box w-52 !text-red-300 scrollbar"
          />
        </div>
      </div>
    </div>
  );
}

export default Settings;
