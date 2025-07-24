import Masonry from "@/components/common/Masonry";
import { randomString } from "@/utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const test = [
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
  randomString(),
];

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
      <Masonry
        data={Object.entries(grouped)}
        colNumber={3}
        orientation="vertical"
        render={([k, v]) => (
          <div key={k}>
            <p className="font-semibold">{k}</p>
            <ul className="px-4">
              {v.map((s) => (
                <li className="list-disc">
                  <Link to={`/category/${s}`} className="cursor-pointer">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      />
    </section>
  );
}
