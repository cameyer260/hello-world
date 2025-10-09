"use client";

import { useState } from "react";

import Link from "next/link";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  async function submitForm(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    if (res.ok) {
      setMessage("✅ Form submitted successfully!");
      setName("");
      setUsername("");
      setEmail("");
    } else {
      setMessage("❌ Error submitting form.")
      setError(true);
    }
  }

  return (
    <div className="flex flex-col justify-center text-3xl p-6 gap-4">
      <div className="flex justify-center">
        <h1>Hello World!</h1>
      </div>
      <div className="flex text-center flex-col gap-2">
        <h1>This is my new VPS that I am setting up!</h1>
        <h1>Check out some of my other websites!</h1>
        <Link href="https://www.docuquery.online/">
          <u>docuquery.online</u>
        </Link>
        <Link href="https://www.christophermeyer.dev/">
          <u>christophermeyer.dev</u>
        </Link>
        <Link href="https://www.playskillsphere.com/">
          <u>playskillsphere.com</u>
        </Link>
        <h1>just adding a useless change so i can test deploy on vps</h1>
      </div>

      <div className="border-t mt-6">
        <h1 className={`${error ? "bg-red-800" : "bg-green-800"} h-10px text-center`}>{message}</h1>
        <form
          onSubmit={submitForm}
          className="flex flex-col [&>input]:w-1/2 items-center gap-4 pt-4"
        >
          <h1>Put your name here!</h1>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded"
          />
          <button type="submit" className="p-2 border rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
