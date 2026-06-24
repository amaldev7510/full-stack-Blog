"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import supabase from "../config/supabaseClient";
import"./login.css";
export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setFormErrors("Please fill all fields");
      return;
    }

    const { data, error } = await supabase
      .from("User")
      .select("*")
      .eq("email", email)
      .eq("password", password)
      .single();

    if (error || !data) {
      setFormErrors("Invalid email or password");
      return;
    }

    setCookie("userId", data.id);

    setFormErrors("");

    router.push("/blogs");
  };

  return (
    <div className="container">

      <h1 className="heading">Login</h1>

      <form onSubmit={handleLogin}>
        <input className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="button">
          Login
        </button>

        {formErrors && (
          <p>{formErrors}</p>
        )}
      </form>
    </div>
  );
}