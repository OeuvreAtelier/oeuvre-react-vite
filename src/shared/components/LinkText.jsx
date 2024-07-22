import React from "react";

export default function LinkText({href, text}) {
  return (
    <li className="mb-4">
      <a href={href} className="hover:underline text-sm">
        {text}
      </a>
    </li>
  );
}
