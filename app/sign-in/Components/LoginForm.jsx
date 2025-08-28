"use client";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import GoogleLogin from "./SocialLogin/GoogleLogin";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!response.error) {
        router.push("/");
        e.target.reset();
      } else {
        alert("Authentication Failed");
      }

      console.log("SignIn response:", response);
    } catch (error) {
      console.error("Authentication Failed", error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="fieldset">
      <label className="label">Email</label>
      <input name="email" type="email" className="input" placeholder="Email" />
      <label className="label">Password</label>
      <input
        name="password"
        type="password"
        className="input"
        placeholder="Password"
      />
      <div>
        <a className="link link-hover">Forgot password?</a>
      </div>
      <button className="btn btn-neutral mt-4">Login</button>
      <div className="divider h-2 m-2">OR</div>
      <GoogleLogin />
      <p>
        Do You have an Account?{" "}
        <Link href="/sign-up" className="text-red-500">
          Register
        </Link>
      </p>
    </form>
  );
}
