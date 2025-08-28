import React from "react";
import LoginForm from "./Components/LoginForm";

export default function SignIn() {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl font-bold">Login now!</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
