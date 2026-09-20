"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
      setMessage("You're in — check your inbox for a confirmation.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-start">
      <div className="flex-1">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          disabled={status === "loading"}
          className="w-full rounded-md border border-white/15 bg-black/40 px-4 py-2 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#FF0020] disabled:opacity-50"
        />
        {message && (
          <p className={`mt-1.5 text-xs ${status === "error" ? "text-[#FF2828]" : "text-white/60"}`}>
            {message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="h-[38px] shrink-0 rounded-md bg-[#FF0020] px-5 text-sm font-medium text-white transition-colors hover:bg-[#e0001c] disabled:opacity-50"
      >
        {status === "loading" ? "Joining..." : "Join"}
      </button>
    </form>
  );
}