import React from "react";
import { HiPhoneIncoming, HiPhoneOutgoing } from "react-icons/hi";

function CallCardItem({ call, onClick }) {
  const { created_at, direction, from, to } = call;
  const formatDate = (date) => {
    const dateObj = new Date(date).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return [dateObj.split(" ")[0], dateObj.split(" ")[1]];
  };
  return (
    <div
      class="card card-side info-content border mx-2 my-2 flex justify-around items-center h-14 hover:cursor-pointer"
      onClick={onClick}
    >
      <div class="card-content flex justify-start items-center px-2">
        {direction === "inbound" ? (
          <HiPhoneIncoming className="w-5 h-5 fill-primary mr-5" />
        ) : (
          <HiPhoneOutgoing className="w-5 h-5 fill-primary mr-5" />
        )}
        <div class="card-text text-md font-bold w-36 max-w-36">
          {direction === "inbound" ? from : to}
        </div>
      </div>

      <div class="divider divider-horizontal my-4 min-w-10 mx-auto" />
      <div className="card-footer basis-1/3 flex justify-center items-center w-30 min-w-30 px-2">
        <div className="text-md font-light text-center">
          {formatDate(created_at)[0]}
        </div>
        <div className="badge badge-accent badge-outline badge-sm mx-1">
          {formatDate(created_at)[1] === "PM" ? "PM" : "AM"}
        </div>
      </div>
    </div>
  );
}

export default CallCardItem;
