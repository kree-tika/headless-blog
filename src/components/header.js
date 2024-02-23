import Link from "next/link";
import "./style.css";

export default function Header() {
  return (
    <header>
      <div className="nav-header">
        <div className="nav-links">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/gallery" className="nav-link">
            Gallery
          </Link>
          <Link href="/blogs" className="nav-link">
            Blogs
          </Link>
          <Link href="/news" className="nav-link">
            News and Events
          </Link>
        </div>
      </div>
    </header>
  );
}
