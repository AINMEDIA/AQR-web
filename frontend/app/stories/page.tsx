"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import userStoriesData from "@/data/user-stories.json";

export default function StoriesPage() {
  const [stories, setStories] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Use static data instead of API call
    setStories(userStoriesData);
    setLoading(false);
  }, []);

  const filtered = stories.filter((story) =>
    story.title.toLowerCase().includes(search.toLowerCase()) ||
    (story.author || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-8 text-center">User Stories</h1>
      <div className="mb-6 flex justify-center">
        <Input
          type="text"
          placeholder="Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
      </div>
      {loading && <div className="text-center text-blue-600">Loading stories...</div>}
      {!loading && filtered.length === 0 && (
        <div className="text-center text-gray-500">No stories found.</div>
      )}
      <div className="grid gap-4 md:gap-6 grid-cols-2">
        {filtered.map((story) => (
          <Card key={story.id} className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle>{story.title}</CardTitle>
              <CardDescription>{story.author}</CardDescription>
            </CardHeader>
            <CardContent>
              {story.image_path && (
                <img
                  src={`/${story.image_path}`}
                  alt={story.title}
                  className="w-full h-48 object-cover rounded mb-2 transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              )}
              <div className="text-gray-700 text-sm whitespace-pre-line">{story.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 