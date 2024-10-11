/* eslint-disable prefer-const */
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const router = useRouter(); // Next.js router for client-side navigation

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // If no URL is provided, redirect to the homepage
    if (!url) {
      router.push("/");
    } else {
      // Remove any leading spaces and ensure that the URL is correctly formatted

      let formattedUrl = url.trim();

      // Build the redirect URL to be in the format of localhost:3000/{user-input-url}
      const redirectUrl = `/${encodeURIComponent(formattedUrl)}`;

      // Use router.push to navigate without page reload
      router.push(redirectUrl);
    }
  };
  return (
    <div className="container">
      <header className="header">
        <div className="logoWrapper">
          <Image src="/bot.webp" alt="WebWiz Logo" width={100} height={100} />
        </div>
        <h1 className="title">Welcome to WebWiz</h1>
        <p className="subtitle">Chat with any website effortlessly.</p>
      </header>
      {/* Form for inputting URL */}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter website URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="urlInput"
        />
        <button type="submit" className="submitButton">
          Go
        </button>
      </form>
    </div>
  );
}
