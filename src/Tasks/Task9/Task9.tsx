import { useMemo, useState } from "react";
import courses from "../../courses.json";

type SortOrder = "asc" | "desc";

interface Course {
  id: string;
  title: string;
  category: string;
  seats: number;
  version: number;
}

const generateCourses = (courses: Course[], count: number): Course[] => {
  return Array.from({ length: count }, (_, i) => {
    const template = courses[i % courses.length];

    return {
      ...template,
      id: `${template.id}-${i}`,
    };
  });
};

const generatedCourses = generateCourses(courses as Course[], 2000);

export const Task9 = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [count, setCount] = useState(0);

  const coursesWithUseMemo = useMemo(() => {
    const start = performance.now();

    const sorted = [...generatedCourses].sort((a, b) => {
      return sortOrder === "asc"
        ? a.id.localeCompare(b.id, undefined, { numeric: true })
        : b.id.localeCompare(a.id, undefined, { numeric: true });
    });

    const end = performance.now();
    console.log(
      `[With useMemo] Calculation time: ${(end - start).toFixed(3)} ms`,
    );

    return sorted;
  }, [sortOrder]);

  const sortWithoutUseMemo = () => {
    const start = performance.now();

    const sorted = [...generatedCourses].sort((a, b) => {
      return sortOrder === "asc"
        ? a.id.localeCompare(b.id, undefined, { numeric: true })
        : b.id.localeCompare(a.id, undefined, { numeric: true });
    });

    const end = performance.now();
    console.log(
      `[Without useMemo] Calculation time: ${(end - start).toFixed(3)} ms`,
    );

    return sorted;
  };

  const coursesWithoutUseMemo = sortWithoutUseMemo();

  return (
    <div>
      <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
        <button
          type="button"
          onClick={() =>
            setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
          }
        >
          Sort by id: {sortOrder.toUpperCase()}
        </button>

        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          Unrelated counter: {count}
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "48px",
        }}
      >
        <div>
          <h2>With useMemo ({coursesWithUseMemo.length})</h2>
          {coursesWithUseMemo.map((course) => (
            <div key={course.id}>{course.id}</div>
          ))}
        </div>

        <div>
          <h2>Without useMemo ({coursesWithoutUseMemo.length})</h2>
          {coursesWithoutUseMemo.map((course) => (
            <div key={course.id}>{course.id}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
