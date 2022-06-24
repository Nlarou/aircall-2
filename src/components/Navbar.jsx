import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaPhoneAlt, FaTh } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import CallsContext from "../context/calls/CallsContext";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { calls, loading } = useContext(CallsContext);

  const matchPathRoute = (route) => {
    if (location.pathname === route) {
      return true;
    }
  };
  const getMissedCalls = () => {
    const missedCalls = calls.filter(
      (call) => call.call_type === "missed" && !call.is_archived
    );
    return missedCalls.length;
  };

  return (
    <nav className="h-20 max-h-20 w-full border-t base-content flex  z-99 ">
      <div className="flex mx-auto gap-10">
        <div className="flex flex-col flex-grow items-center justify-center">
          <div class="indicator">
            {!loading ? (
              <span class="indicator-item badge badge-md w-6 badge-danger">
                <div className="text-xs">
                  {getMissedCalls() > 99 ? "99+" : getMissedCalls()}
                </div>
              </span>
            ) : (
              ""
            )}
            <FaPhoneAlt className="w-5 h-5" onClick={() => navigate("/")} />
          </div>
          <div class="indicator">
            Calls
            {matchPathRoute("/") && (
              <span class="indicator-item indicator-bottom indicator-center badge badge-success w-full h-1/4" />
            )}
          </div>
        </div>

        <div className="flex flex-col flex-grow items-center justify-center ">
          <FaTh className="w-5 h-5" onClick={() => navigate("/Keypad")} />
          <div class="indicator">
            Keypad
            {matchPathRoute("/Keypad") && (
              <span class="indicator-item indicator-bottom indicator-center badge badge-success w-full h-1/4" />
            )}
          </div>
        </div>

        <div className="flex flex-col flex-grow items-center justify-center ">
          <FaUser className="w-5 h-5" onClick={() => navigate("/Contact")} />
          <div class="indicator">
            Contact
            {matchPathRoute("/Contact") && (
              <span class="indicator-item indicator-bottom indicator-center badge badge-success w-full h-1/4" />
            )}
          </div>
        </div>
        <div className="flex flex-col flex-grow items-center justify-center ">
          <BsGearFill
            className="w-5 h-5"
            onClick={() => navigate("/Settings")}
          />
          <div class="indicator">
            Settings
            {matchPathRoute("/Settings") && (
              <span class="indicator-item indicator-bottom indicator-center badge badge-success w-full h-1/4" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
