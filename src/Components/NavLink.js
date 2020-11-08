import React from "react";
import Link from "next/link";

export default function NavLink({ id, bgClass, title }) {
  return (
    <Link href={`/project?id=${id}`}>
      <div className="hexagon hexagon2 ">
        <div className="hexagon-in1">
          <div className={`hexagon-in2 ${bgClass}`}>
            <div>
              <h3>{title}</h3>
              <p>project</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
