import { useEffect, useState } from "react";

const test = [
  "Cooking Hacks",
  "Urban Exploration",
  "Tech Reviews",
  "Historical Documentaries",
  "DIY Home Projects",
  "Gaming Walkthroughs",
  "Street Interviews",
  "Animation Shorts",
  "Mindfulness & Meditation",
  "Language Learning",
  "Fashion Hauls",
  "Sci-Fi Short Films",
  "Comedy Skits",
  "True Crime",
  "Productivity Tips",
  "Nature & Wildlife",
  "Book Summaries",
  "Martial Arts Tutorials",
  "Drone Footage",
  "Podcast Clips",
  "Fitness Challenges",
  "ASMR Relaxation",
  "Live Music Performances",
  "Vintage Commercials",
  "Stop Motion Animation",
];

function CategoryHeading(alp: string) {
  return <p className="font-bold">{alp}</p>;
}

function CategoryName(name: string) {
  return <li>{name}</li>;
}

export default function Categories() {
  const [grouped, setGrouped] = useState<Record<string, string[]>>({});

  useEffect(() => {
    const sorted = [...test].sort((a, b) => a.localeCompare(b));
    const groups: Record<string, string[]> = {};

    sorted.forEach((item) => {
      const firstChar = item.charAt(0).toUpperCase();
      if (!groups[firstChar]) {
        groups[firstChar] = [];
      }
      groups[firstChar].push(item);
    });

    setGrouped(groups);
  }, []);

  return (
    <section className="px-3 py-2 space-y-2 max-h-full w-full">
      <div>
        <h1>Categories</h1>
      </div>
      <div>
        {Object.entries(grouped).map(([letter, items]) => (
          <div key={letter}>
            <p className="font-bold text-lg">{letter}</p>
            <ul className="ml-4 list-disc">
              {items.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
