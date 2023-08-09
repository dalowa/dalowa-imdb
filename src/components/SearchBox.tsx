"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!search) return;

    router.push(`/search/${search}`);
  }
  useRouter;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        name=""
        id=""
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gary-500  outline-none bg-transparent flex-1"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
