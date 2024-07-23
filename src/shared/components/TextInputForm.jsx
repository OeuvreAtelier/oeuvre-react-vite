import React from "react";

export default function TextInputForm({ type, id, name, value, placeholder, onChange }) {
  return (
    <div className="mb-3">
      <input
        type={type}
        id={id}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
