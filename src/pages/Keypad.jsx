import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
function Keypad() {
  const [keypad, setKeypad] = useState("");
  return (
    <div className="w-full p-2 mt-5">
      <div className="grid grid-cols-1 justify-items-center">
        <input
          type="text"
          class="input input-bordered mx-5 w-full mb-5 text-center"
          disabled={true}
          value={keypad}
        />
        <div className="grid grid-cols-3 grid-rows-5 w-full justify-items-center p-2 h-96">
          <button
            class="btn btn-lg btn-outline border-none w-full h-full rounded-none"
            value="1"
            onClick={(e) => {
              setKeypad((prev) => prev + e.target.value);
            }}
          >
            1
          </button>
          <button
            class="btn btn-lg btn-outline border-none w-full h-full rounded-none"
            value="2"
            onClick={(e) => {
              setKeypad((prev) => prev + e.target.value);
            }}
          >
            2
          </button>
          <button
            class="btn btn-lg btn-outline border-none w-full h-full rounded-none"
            value="3"
            onClick={(e) => {
              setKeypad((prev) => prev + e.target.value);
            }}
          >
            3
          </button>
          <button
            class="btn btn-lg btn-outline border-none w-full h-full rounded-none"
            value="4"
            onClick={(e) => {
              setKeypad((prev) => prev + e.target.value);
            }}
          >
            4
          </button>
          <button
            class="btn btn-lg btn-outline border-none w-full h-full rounded-none"
            value="5"
            onClick={(e) => {
              setKeypad((prev) => prev + e.target.value);
            }}
          >
            5
          </button>
          <button
            class="btn btn-lg btn-outline border-none w-full h-full rounded-none"
            value="6"
            onClick={(e) => {
              setKeypad((prev) => prev + e.target.value);
            }}
          >
            6
          </button>
          <button
            class="btn btn-lg btn-outline border-none w-full h-full rounded-none"
            value="7"
            onClick={(e) => {
              setKeypad((prev) => prev + e.target.value);
            }}
          >
            7
          </button>
          <button
            class="btn btn-lg btn-outline border-none w-full h-full rounded-none"
            value="8"
            onClick={(e) => {
              setKeypad((prev) => prev + e.target.value);
            }}
          >
            8
          </button>
          <button
            class="btn btn-lg btn-outline border-none w-full h-full rounded-none"
            value="9"
            onClick={(e) => {
              setKeypad((prev) => prev + e.target.value);
            }}
          >
            9
          </button>
          <button
            class="btn btn-lg btn-outline border-none w-full h-full rounded-none"
            value="0"
            onClick={(e) => {
              setKeypad((prev) => prev + e.target.value);
            }}
          >
            0
          </button>
          <button
            class="btn btn-lg btn-outline border-none w-full h-full rounded-none"
            value="*"
            onClick={(e) => {
              setKeypad((prev) => prev + e.target.value);
            }}
          >
            *
          </button>
          <button
            class="btn btn-lg btn-outline border-none w-full h-full rounded-none"
            value="#"
            onClick={(e) => {
              setKeypad((prev) => prev + e.target.value);
            }}
          >
            #
          </button>
          <div></div>
          <div className="flex justify-center items-center p-2">
            <div className="badge badge-lg w-full h-full rounded-full p-2 hover:cursor-pointer">
              <FaPhoneAlt className="w-full h-full" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Keypad;
