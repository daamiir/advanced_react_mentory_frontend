import { useState } from "react";
import { Panel } from "./Panel";

interface Course {
  id: string;
  title: string;
  canEnroll: boolean;
}

const COURSES: Course[] = [
  {
    id: "1",
    title: "React",
    canEnroll: true,
  },
  {
    id: "2",
    title: "Advanced React",
    canEnroll: false,
  },
  {
    id: "3",
    title: "TypeScript",
    canEnroll: false,
  },
  {
    id: "4",
    title:
      "Test for long title: ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    canEnroll: true,
  },
];

export const Task5 = () => {
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const filteredCourses = [...COURSES].filter((course) =>
    onlyAvailable ? course.canEnroll : true,
  );

  return (
    <div>
      <Panel
        title="Filters"
        actions={
          <>
            <button
              type="button"
              onClick={() => setOnlyAvailable(!onlyAvailable)}
            >
              {onlyAvailable ? "All Courses" : "Available Courses"}
            </button>
          </>
        }
      />

      {filteredCourses.map((course) => (
        <Panel
          key={course.id}
          title={course.title}
          actions={
            course.canEnroll ? (
              <button
                type="button"
                onClick={() => alert(`Enrolled in ${course.title}`)}
              >
                Enroll
              </button>
            ) : undefined
          }
        >
          <p>Course ID: {course.id}</p>
        </Panel>
      ))}
    </div>
  );
};
