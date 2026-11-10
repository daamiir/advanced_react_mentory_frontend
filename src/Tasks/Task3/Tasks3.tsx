import { memo, useState, useTransition } from "react";

interface Item {
  id: string;
  title: string;
}

const items: Item[] = Array.from({ length: 240 }, (_, i) => ({
  id: String(i),
  title: ["React", "CSS", "TypeScript"][i % 3] + " " + i,
}));

const CourseCard = ({ item, query }: { item: Item; query: string }) => {
  let checksum = item.id.length + query.length;
  for (let i = 0; i < 80000; i++) checksum = (Math.imul(checksum, 31) + i) | 0;
  return (
    <li>
      {item.title} — {checksum}
    </li>
  );
};

const Results = memo(function Results({ query }: { query: string }) {
  return (
    <ul>
      {items
        .filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase()),
        )
        .map((item) => (
          <CourseCard key={item.id} item={item} query={query} />
        ))}
    </ul>
  );
});

const Search = () => {
  const [text, setText] = useState("");
  const [listQuery, setListQuery] = useState("");

  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);

    startTransition(() => {
      setListQuery(value);
    });
  };

  return (
    <>
      <label>
        Поиск
        <input value={text} onChange={handleChange} />
      </label>

      {isPending && <p>Loading...</p>}

      <Results query={listQuery} />
    </>
  );
};

export const Task3 = () => {
  return (
    <>
      <Search />
    </>
  );
};
