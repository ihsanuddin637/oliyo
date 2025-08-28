import React from "react";
import RegisterForm from "./Components/RegisterForm";

export default function SignUp() {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl font-bold">Sign Up now!</h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
