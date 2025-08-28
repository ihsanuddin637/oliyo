'use client'
import { signOut } from "next-auth/react";
import React from "react";

export default function LogOutButton() {
  return (
    <div>
      <p onClick={() => signOut()} className="hover:bg-gray-700 p-2 rounded cursor-pointer">
        Log Out
      </p>
    </div>
  );
}
