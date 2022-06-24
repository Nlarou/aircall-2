import React from "react";

function Spinner() {
  return (
    <div className="flex align-middle justify-center h-full my-20">
      <div className="w-40 h-40 border-t-4 border-b-4 border-success rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;
