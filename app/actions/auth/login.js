"use server";

import { dbConnect, collectionNameObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {
  const userCollection = await dbConnect(collectionNameObj.userCollection);

  // Check if user exists by email
  const existingUser = await userCollection.findOne({ email: payload.email });
  if (!existingUser) {
    return null;
  }

  // Compare password
  const isPasswordOk = await bcrypt.compare(
    payload.password,
    existingUser.password
  );
  if (!isPasswordOk) {
    return null;
  }

  // Return user object in the shape NextAuth expects
  return {
    id: existingUser._id.toString(),
    name: existingUser.name,
    email: existingUser.email,
  };
};