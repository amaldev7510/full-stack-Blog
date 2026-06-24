"use client";
import { useState } from "react";
import supabase from "../config/supabaseClient"; 
import"../css/signup.css";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [full_Name, setFullName] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const handleSubmit= async (e) =>{
    e.preventDefault()
    if(!full_Name || !email || !password) {
      setFormErrors('please fill all the fields correctly')
      return
    }
    const {data, error} = await  supabase
    .from('User')
    .insert([{full_Name,email,password}])

    if (error) {  
      console.log(error)
      setFormErrors('please fill all the fields correctly')
    }
    if (data) {
      console.log(data)
      setFormErrors(null)
    }
  }
  return (
    <>
    <nav className="navbar">
  
        <Link href="/" className="navLink">
          Home
        </Link>
        
      </nav>
    <div className="container">
      <h1 className="heading">Signup</h1>

      <form onSubmit={handleSubmit}>
        <input
         className="input"
          type="text"
          placeholder="Full Name"
          value={full_Name}
          onChange={(e) => setFullName(e.target.value)}
        />
         <br/>
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
          <br/>
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
            <br/>
        <button type="submit" className="button">
             sign up
        </button>
        <br/>
        {formErrors && <p className="error">{formErrors}</p>}
      </form>
    </div>
    </>
  );
}