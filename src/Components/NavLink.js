import React from "react";
import Link from "next/link";

export default function NavLink({ id, bgClass, title }) {



  return (
    <Link href={`/project?id=${id}`}>
      <div class="hexagon hexagon2 ">
        <div class="hexagon-in1">
          <div class={`hexagon-in2 ${bgClass}`}>
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
