"use server";

import { dbConnect, collectionNameObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const registerUser = async (payload) => {
  const { email, password, name } = payload;

  const userCollection = await dbConnect(collectionNameObj.userCollection);

  // Check if user already exists
  const existingUser = await userCollection.findOne({ email });
  if (existingUser) {
    return null; // User already exists
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert new user
  const result = await userCollection.insertOne({
    email,
    password: hashedPassword,
    name: name || email.split("@")[0], // fallback if no name provided
    role: "user", // default role
    createdAt: new Date(),
  });

  // Return the created user in a usable format
  return {
    id: result.insertedId.toString(),
    email,
    name: name || email.split("@")[0],
    role: "user",
  };
};
