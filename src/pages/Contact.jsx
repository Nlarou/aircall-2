import React from "react";
import { FaUserCircle } from "react-icons/fa";

const contact = ["John Doe", "The guy from Cyberpunk", "Johhny Doe", "Smithy"];
function Contact() {
  return (
    <div className="w-full">
      <div className="w-full max-w-full  max-h-full overflow-y-auto scrollbar">
        <div className="cards-container grid grid-cols-1 content-center p-2">
          {contact.map((contact) => (
            <div class="card card-side info-content border mx-2 my-2 flex justify-around items-center h-14">
              <div class="card-content flex justify-start items-center px-2 w-full">
                <div>
                  <FaUserCircle className="w-7 h-7 fill-primary mx-5" />
                </div>
                <div class="card-text text-md font-bold w-1/2">{contact}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
