"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../css/blogs.css";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response =
      await fetch("/api/blogs");

    const data =
      await response.json();

    if (response.ok) {
      setBlogs(data);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="blogsContainer">
        <h1 className="pageTitle">
          All Blogs
        </h1>

        <p>Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="blogsContainer">

      <h1 className="pageTitle">
        All Blogs
      </h1>

      {blogs.length === 0 ? (

        <p>
          No blogs have been created.
        </p>

      ) : (

        blogs.map((blog) => (

          <div
            key={blog.id}
            className="blogCard"
          >

            <h2>
              {blog.title}
            </h2>

            <p>
              {blog.short_description}
            </p>

            <p>
              Author ID:
              {" "}
              {blog.author_id}
            </p>

            <p>
              Created at:
              {" "}
              {blog.created_at}
            </p>
             
             <Link href={`/blogs/${blog.id}`}  className="readMore"> Read More</Link>
          </div>
        ))
      )}

    </div>
  );
}