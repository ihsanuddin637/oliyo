import { collectionNameObj, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();

    // dbConnect already returns a collection
    const productDetails = await dbConnect(collectionNameObj.productDetails);

    // insert document into collection
    const result = await productDetails.insertOne(body);

    return NextResponse.json(
      { success: true, message: "Product added successfully", result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting product:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to add product",
        error: error.message,
      },
      { status: 500 }
    );
  }
};
