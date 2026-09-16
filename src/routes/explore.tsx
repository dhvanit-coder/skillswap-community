import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

function ExploreSkills() {
  const [skills, setSkills] = useState<any[]>([]);
  console.log("ALL SKILLS:", skills);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
 const [category, setCategory] = useState("all");
  const filteredSkills = skills.filter((skill) => {
  const matchesSearch = skill.name
    .toLowerCase()
    .includes(search.toLowerCase());

 const matchesCategory =
  category === "all" ||
  skill.category?.toLowerCase() === category.toLowerCase();

  return matchesSearch && matchesCategory;
});
  useEffect(() => {
    async function loadSkills() {
      const { data, error } = await supabase
        .from("skills")
        .select("id, name, category")
        .order("name");

     if (error) {
  console.error(
    "LOAD SKILLS ERROR:",
    error.message,
    error.details,
    error.hint
  );
  setLoading(false);
  return;
}

console.log("SKILLS FROM SUPABASE:", data);
console.log("ALL SKILL DATA:", data);
console.log(
  "LANGUAGE CHECK:",
  (data ?? [])
    .filter((skill) =>
      skill.name === "English" ||
      skill.name === "Gujarati" ||
      skill.name === "Hindi"
    )
    .map((skill) => ({
      name: skill.name,
      category: JSON.stringify(skill.category),
      categoryLength: skill.category?.length,
    }))
);
      setSkills(data ?? []);
      setLoading(false);
    }

    loadSkills();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-on-surface">
        Explore Skills
      </h1>
      <div className="mt-6">
  <input
    type="text"
    placeholder="Search skills..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full max-w-md p-3 rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary/40"
  />
</div>
<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="mt-3 w-full max-w-md p-3 rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary/40"
>
  <option value="all">All Categories</option>
  <option value="programming">Programming</option>
  <option value="web development">Web Development</option>
  <option value="creative">Creative</option>
  <option value="design">Design</option>
  <option value="Languages">Language</option>
  <option value="marketing">Marketing</option>
  <option value="productivity">Productivity</option>
  <option value="writing">Writing</option>
</select>
      {loading ? (
        <p className="mt-6">Loading skills...</p>
      ) : skills.length === 0 ? (
        <p className="mt-6">No skills available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm"
            >
              <h2 className="text-lg font-semibold text-on-surface">
                {skill.name}
              </h2>

              <p className="text-sm text-on-surface-variant mt-1">
                {skill.category ?? "General"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export const Route = createFileRoute("/explore")({
  component: ExploreSkills,
});