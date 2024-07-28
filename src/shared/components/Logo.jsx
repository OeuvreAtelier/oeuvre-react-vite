import React from "react";

export default function Logo({ onClick }) {
  return (
    <h5
      onClick={onClick}
      className="text-2xl font-semibold italic whitespace-nowrap text-white bg-indigo-700 p-4 hover:bg-indigo-800 hover:cursor-pointer"
    >
      OEUVRE.
    </h5>
  );
}
