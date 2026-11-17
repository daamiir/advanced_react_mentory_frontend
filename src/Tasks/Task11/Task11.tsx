import { useState } from "react";
import courses from "../../courses.json";

const useFavorites = () => {
  const [ids, setIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    setIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const clear = () => setIds([]);

  return { ids, toggle, clear };
};

interface Course {
  id: string;
  title: string;
  category: string;
  seats: number;
  version: number;
}

interface PanelProps {
  favoriteCourses: string[];
  clear: () => void;
}

const Panel = ({ favoriteCourses, clear }: PanelProps) => (
  <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
    <h2>Favorite courses: {favoriteCourses.length}</h2>
    <button type="button" onClick={clear}>
      Clear favorite courses
    </button>
  </div>
);

interface CoursesListProps {
  courses: Course[];
  favoriteCourses: string[];
  toggle: (id: string) => void;
}

const CoursesList = ({
  courses,
  favoriteCourses,
  toggle,
}: CoursesListProps) => (
  <>
    {courses.map((course: Course) => {
      const isFavoriteCourse = favoriteCourses.includes(course.id);
      return (
        <div key={course.id}>
          <h3>
            {course.title} {isFavoriteCourse ? "- favorite" : null}
          </h3>
          <label htmlFor={`input-${course.id}`}>
            Select as favorite course
            <input
              id={`input-${course.id}`}
              checked={isFavoriteCourse}
              type="checkbox"
              onChange={() => toggle(course.id)}
            />
          </label>
        </div>
      );
    })}
  </>
);

export const Task11 = () => {
  const { ids, toggle, clear } = useFavorites();
  return (
    <>
      <Panel favoriteCourses={ids} clear={clear} />
      <CoursesList courses={courses} favoriteCourses={ids} toggle={toggle} />
    </>
  );
};
