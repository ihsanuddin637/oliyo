"use client";
import { registerUser } from "@/app/actions/auth/register";
import Link from "next/link";
import React from "react";

export default function RegisterForm() {
  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await registerUser({ email, password, role: "client" });
  };
  return (
    <form onSubmit={handleRegister} className="fieldset">
      <label className="label">Email</label>
      <input name="email" type="email" className="input" placeholder="Email" />
      <label className="label">Password</label>
      <input
        name="password"
        type="password"
        className="input"
        placeholder="Password"
      />
      <button className="btn btn-neutral mt-4">Sign Up</button>
      <p>
        Already Have An Account?{" "}
        <Link href="/sign-in" className="text-red-500">
          Login
        </Link>
      </p>
    </form>
  );
}
