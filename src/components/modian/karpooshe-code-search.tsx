//src\components\modian\karpooshe-code-search.tsx
"use client";

import React, { useState, useEffect } from "react";

interface Suggestion {
  id: string;
  title: string;
}

export default function KarpoosheCodeSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Suggestion[]>([]);
  const [selected, setSelected] = useState<Suggestion | null>(null);
  const [loading, setLoading] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // نیم ثانیه تاخیر

    return () => clearTimeout(timeout);
  }, [query]);

  // Fetch from API
  useEffect(() => {
    if (debouncedQuery.length < 2) {
      setResults([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/catalog/search?q=${debouncedQuery}`);
        const data = await res.json();
        setResults(data.results || []);
      } catch (error) {
        console.error("خطا در دریافت نتایج:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [debouncedQuery]);

  return (
    <div className="w-full max-w-md mx-auto">
      <label className="block text-sm font-medium mb-1">
        جستجوی کد/عنوان خدمت
      </label>
      <input
        type="text"
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
        placeholder="مثلاً آموزش، خدمات، فروش..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setSelected(null);
        }}
      />

      {loading && <p className="text-xs text-gray-500 mt-1">در حال جستجو...</p>}

      {results.length > 0 && (
        <ul className="mt-2 border rounded bg-white shadow">
          {results.map((item) => (
            <li
              key={item.id}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelected(item);
                setQuery(item.title);
                setResults([]);
              }}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}

      {selected && (
        <div className="mt-4 text-sm text-green-700">
          ✅ کد انتخاب‌شده: <strong>{selected.title}</strong>
        </div>
      )}
    </div>
  );
}
