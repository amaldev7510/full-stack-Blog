import Link from "next/link";
import "./css/home.css";

export default function Home() {
  return (
   <div>
      <nav className="navbar">
        <h2 className="logo">
          BlogSphere
        </h2>

        <div className="navLinks">
          
          <Link href="/blogs">
            All Blogs
          </Link>
          <Link href="/blogs/new">
            Create Blog
          </Link>
        </div>
      </nav>

      <main className="homeContainer">
        <div className="heroBox">

          <h1 className="title">
            BlogSphere
          </h1>

          <p className="description">
            Create, share and discover amazing
            blog posts from people around the world.
          </p>

          <div className="buttonGroup">

            <Link href="/login">
              <button className="primaryBtn">
                Login
              </button>
            </Link>

            <Link href="/signup">
              <button className="secondaryBtn">
                Sign Up
              </button>
            </Link>

          </div>

        </div>
      </main>
   </div>
  );
}