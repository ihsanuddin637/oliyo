"use client";
import React from "react";
import axios from "axios";

export default function AddProductForm() {
  const handleAddProduct = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const imageFile = e.target.image.files[0];

    try {
      // 🔑 check API key
      if (!process.env.NEXT_PUBLIC_IMGBB_API_KEY) {
        throw new Error("❌ Missing IMGBB API key. Add it in .env.local");
      }

      if (!imageFile) {
        alert("Please upload a product image.");
        return;
      }

      // 🖼 upload image to imgbb
      const formData = new FormData();
      formData.append("image", imageFile);

      const imgUpload = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        formData
      );

      const imageURL = imgUpload.data?.data?.display_url;

      // 📦 product data
      const alldata = { title, category, description, price, image: imageURL };
      console.log("📦 Sending data:", alldata);

      // 🚀 send to Next.js API
      const res = await fetch("/api/addProducts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(alldata),
      });

      const data = await res.json();
      console.log("✅ Response:", data);

      if (res.ok) {
        alert("✅ Product added successfully!");
        e.target.reset();
      } else {
        alert(`❌ Failed: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("❌ Product add failed:", error);
      alert("Image upload or API request failed. Check console.");
    }
  };

  return (
    <form onSubmit={handleAddProduct} className="w-7/12 mx-auto space-y-4">
      <div className="fieldset bg-base-200 border rounded-box p-4">
        <label className="label">Product Title</label>
        <input name="title" type="text" className="input w-full" required />
      </div>
      <div className="fieldset bg-base-200 border rounded-box p-4">
        <label className="label">Product Category</label>
        <input name="category" type="text" className="input w-full" required />
      </div>
      <div className="fieldset bg-base-200 border rounded-box p-4">
        <label className="label">Product Description</label>
        <input
          name="description"
          type="text"
          className="input w-full"
          required
        />
      </div>
      <div className="fieldset bg-base-200 border rounded-box p-4">
        <label className="label">Product Price</label>
        <input name="price" type="number" className="input w-full" required />
      </div>
      <div className="fieldset bg-base-200 border rounded-box p-4">
        <label className="label">Upload Product Image</label>
        <input
          name="image"
          type="file"
          className="file-input w-full"
          required
        />
      </div>
      <button className="btn btn-primary w-full">Add Product</button>
    </form>
  );
}
