import Link from "next/link";

export default function Header({ link }) {
  return (
    <header className="full-header">
      <div>
        <Link href="/">
          <h2>Portfolio</h2>
        </Link>
      </div>

      <div className="my-links">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={"/img/github.png"} alt="" />
        </a>
      </div>
    </header>
  );
}
