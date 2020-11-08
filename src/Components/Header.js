import Link from "next/link";

export default function Header() {
  return (
    <header className="full-header">
      <div>
        <Link href="/">
          <h2>Portfolio</h2>
        </Link>
      </div>

      <div className="my-links">
        <a href={"https://github.com/Wojstan"}>
          <img src={"/img/github.png"} alt="" />
        </a>
        <a href={"https://github.com/Wojstan"}>
          <img src={"/img/facebook.png"} alt="" />
        </a>
      </div>
    </header>
  );
}
