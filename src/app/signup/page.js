"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "../config/supabaseClient";
import "../css/signup.css";

export default function Signup() {

const router = useRouter();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [full_Name, setFullName] = useState("");
const [formErrors, setFormErrors] = useState("");

const handleSubmit = async (e) => {

e.preventDefault();

if (!full_Name || !email || !password) {
  setFormErrors("Please fill all fields");
  return;
}

const { error } = await supabase
  .from("User")
  .insert([{full_Name,email,password, }, ]);

if (error) {
  setFormErrors(error.message);
  return;
}

alert("Signup Successful");

router.push("/blogs");

};

return (
<> <nav className="navbar"> <Link href="/" className="navLink">
Home </Link> </nav>


  <div className="container">

    <h1 className="heading">Signup</h1>

    <form onSubmit={handleSubmit}>

      <input
        className="input"
        type="text"
        placeholder="Full Name"
        value={full_Name}
        onChange={(e) =>
          setFullName(e.target.value)
        }
      />

      <input
        className="input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        className="input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        type="submit"
        className="button"
      >
        Sign Up
      </button>

      {formErrors && (
        <p className="error">
          {formErrors}
        </p>
      )}

    </form>

  </div>
</>


);
}
