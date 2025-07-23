import Masonry from "@/components/common/Masonry";
import { randomString } from "@/utils";
import { useEffect, useState } from "react";

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
/**
 * {Object.entries(grouped).map(([letter, items]) => (
          <div key={letter}>
            <p className="font-bold text-lg">{letter}</p>
            <ul className="ml-4 list-disc">
              {items.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        ))}
 */

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
        className=""
        render={([k, v]) => (
          <div key={k}>
            <p className="font-semibold">{k}</p>
            <ul className="px-4">
              {v.map((s) => (
                <li className="list-disc">
                  <a className="cursor-pointer">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      />
    </section>
  );
}
