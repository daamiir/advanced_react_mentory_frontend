import { useCourses, type Course } from "./useCourses";
import courses from "../../courses.json";
import { useMemo, useState } from "react";

interface CourseListViewProps {
  items: Course[];
  emptyText: string;
  onSelect: (id: string) => void;
}

const CourseListView = ({
  items,
  emptyText,
  onSelect,
}: CourseListViewProps) => {
  if (items.length === 0) {
    return <p>{emptyText}</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <div key={`${item.category} - ${item.id} - ${item.title}`}>
          <span>{item.title}</span>
          <button type="button" onClick={() => onSelect(item.id)}>
            Select
          </button>
        </div>
      ))}
    </div>
  );
};

const CourseListContainer = () => {
  const [query, setQuery] = useState("");
  const { items, selectedId, handlerSelect } = useCourses(courses);

  const filteredItems = useMemo<Course[]>(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return items;

    return items.filter((item) =>
      item.title.toLowerCase().includes(normalizedQuery),
    );
  }, [items, query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">
        Search:
        <input id="search" type="text" value={query} onChange={handleChange} />
      </label>

      <p>Selected Course ID: {selectedId ?? "not selected"}</p>

      <CourseListView
        items={filteredItems}
        emptyText={"Not found"}
        onSelect={handlerSelect}
      />
    </div>
  );
};

export const Task7 = () => {
  return (
    <div>
      <section>
        <CourseListContainer />
      </section>

      <section>
        <h2>Testing: Full array</h2>
        <CourseListView
          items={courses}
          emptyText="Not found"
          onSelect={(id) => console.log("testing: full array, id:", id)}
        />
      </section>

      <section>
        <h2>Testing: Empty array</h2>
        <CourseListView
          items={[]}
          emptyText="Not found"
          onSelect={() => console.log("testing: empty array")}
        />
      </section>
    </div>
  );
};
