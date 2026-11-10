import { memo, useDeferredValue, useState } from "react";

interface Item {
  id: string;
  title: string;
}

const items: Item[] = Array.from({ length: 999 }, (_, i) => ({
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
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <ul>
      {filteredItems.map((item) => (
        <CourseCard key={item.id} item={item} query={query} />
      ))}
    </ul>
  );
});

const Search = () => {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  const isStale = text !== deferredText;

  return (
    <>
      <label>
        Поиск
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>

      <p>Запрос: {deferredText}</p>

      {isStale && <p>Обновляем результаты</p>}
      <Results query={deferredText} />
    </>
  );
};

export const Task4 = () => {
  return <Search />;
};
