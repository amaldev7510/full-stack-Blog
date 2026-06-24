"use client";

import { useState } from "react";
import "../../css/newBlog.css";

export default function NewBlog() {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!title || !shortDescription || !content) {
    setMessage("Please fill all fields");
    return;
  }

  const response = await fetch("/api/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      short_description: shortDescription,
      content,
    }),
  });

  const result = await response.json();

  if (response.ok) {
    setMessage("Submitted Successfully ✅");

    setTitle("");
    setShortDescription("");
    setContent("");
  } else {
    setMessage(result.error);
  }
};

  return (
    <div className="container">
      <h1 className="heading">
        Create Blog
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          className="input"
          type="text"
          placeholder="Short Description"
          value={shortDescription}
          onChange={(e) =>
            setShortDescription(
              e.target.value
            )
          }
        />

        <textarea
          className="textarea"
          placeholder="Blog Content"
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
        />

        <button
          className="button"
          type="submit"
        >
          Create Blog
        </button>

        {message && (
          <p className="message">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}