import React from "react";

export default function Quote({ id, title, memo }) {
  return (
    <li key={id}>
      <h3>{title}</h3>
      <div className="bg"></div>
      <p>{memo}</p>
    </li>
  );
}
