"use client";

import { useState } from "react";

export default function Home() {
  const [idea, setIdea] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idea }),
      });
      if (response.ok) {
        setSubmitted(true);
        setIdea("");
        setError(false);
      } else {
        console.error("Failed to submit idea");
        setError(true);
      }
    } catch (error) {
      console.error("An error occurred while submitting the idea", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
          Got an Idea?
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8">
          Upload software ideas that you wish existed here!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            className="w-full p-4 rounded-lg border border-foreground/20 bg-background/80 text-foreground focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Describe your brilliant idea..."
            rows={6}
            required
          />
          <button
            type="submit"
            className="w-full bg-sky-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-700 transition-colors duration-300"
          >
            Submit Idea
          </button>
        </form>
        {submitted && !error ? (
          <p className="mt-4 text-green-500">Thank you for your submission!</p>
        ) : submitted && (
          <p className="mt-4 text-red-500">Oops! We ran into an error submitting your idea! Please try again later.</p>
        )}
      </div>
    </main>
  );
}
