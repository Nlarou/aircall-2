import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ActivityFeed from "./pages/ActivityFeed.jsx";
import Header from "./components/Header.jsx";
import Keypad from "./pages/Keypad.jsx";
import Settings from "./pages/Settings.jsx";
import Contact from "./pages/Contact.jsx";
import { CallsProvider } from "./context/calls/CallsContext.js";
import ActivityDetails from "./pages/ActivityDetails.jsx";

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = (theme) => {
    setTheme(theme);
  };
  return (
    <CallsProvider>
      <Router>
        <div className="container" data-theme={theme}>
          <Header />
          <Routes>
            <Route path="/" element={<ActivityFeed />} />
            <Route path="/Keypad" element={<Keypad />} />
            <Route
              path="/Settings"
              element={
                <Settings toggleTheme={toggleTheme} currentTheme={theme} />
              }
            />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/ActivityDetails/:id" element={<ActivityDetails />} />
            <Route path="*" exact={true} element={<ActivityFeed />} />
          </Routes>
          <Navbar />
        </div>
      </Router>
    </CallsProvider>
  );
};

export default App;
