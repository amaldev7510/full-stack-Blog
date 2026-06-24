"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "../../css/singleBlog.css";

export default function SingleBlog() {

  const params = useParams();

  const [blog, setBlog] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchBlog(); }, []);

  const fetchBlog = async () => {

      const response = await fetch(`/api/blogs/${params.id}`);

      const data = await response.json();

      setBlog(data);

      setLoading(false);
    };

  if (loading) { return <h2>Loading...</h2>;}

  if (!blog) { return <h2>Blog not found</h2>; }

  return (
    <div className="container">

      <h1 className="title">{blog.title}</h1>

      <p className="date">Created:{" "}{blog.created_at}</p>

      <p className="author">
           Author Name: {blog.User?.full_Name}</p>

      <p className="content">content:{" "}
        {blog.content}
      </p>

    </div>
  );
}