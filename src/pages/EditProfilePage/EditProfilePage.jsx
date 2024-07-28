import React from "react";
import Navbar from "../../shared/components/Navbar";
import EditProfileContainer from "./components/EditProfileContainer";

export default function EditProfilePage() {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <EditProfileContainer />
    </div>
  );
}
