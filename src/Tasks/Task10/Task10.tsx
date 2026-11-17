import { memo, useCallback, useState } from "react";
import courses from "../../courses.json";

interface SelectCourse {
  id: string;
  onSelect: (id: string) => void;
  options: { highlight: boolean };
}

const SelectCourse = memo(({ id, onSelect, options }: SelectCourse) => {
  console.log("[Render]: Child component rendered!");
  return (
    <button type="button" onClick={() => onSelect(id)}>
      <span style={{ fontWeight: options.highlight ? "bold" : "normal" }}>
        Select
      </span>
    </button>
  );
});

const ParentComponent = () => {
  const [counter, setCounter] = useState<number>(0);
  const [selectedId, setSelectedId] = useState<string>("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handlerSelect = useCallback((id: string) => {
    localStorage.setItem("selected-course", id);
    setSelectedId(id);
    setSelectedIds((prev) => [...prev, id]);
  }, []);

  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          {course.id}
          <SelectCourse
            onSelect={handlerSelect}
            id={course.id}
            options={{ highlight: true }}
          />
        </div>
      ))}

      <h2>Selected course: {selectedId}</h2>
      <p>{selectedIds.join(", ")}</p>

      <button type="button" onClick={() => setCounter((prev) => prev + 1)}>
        Increment
      </button>

      <h2>Unrelated counter: {counter}</h2>
    </>
  );
};

export const Task10 = () => {
  return <ParentComponent />;
};
