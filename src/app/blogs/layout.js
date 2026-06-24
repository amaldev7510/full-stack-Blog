import LogoutButton from "../components/logoutButton.js";
import "../css/logout.css";
import Link from "next/link";
export default function BlogsLayout({
  children,
}) {
  return (
    <div>

      <nav className="navbar">

        <h2 className="logo">
          BlogSphere
        </h2>

        <div className="navLinks">
           <Link href="/">
            Home
          </Link>
          <Link href="/blogs">
            All Blogs
          </Link>

          <Link href="/blogs/new">
            Create Blog
          </Link>

          <LogoutButton />

        </div>

      </nav>

      <main>
        {children}
      </main>

    </div>
  );
}