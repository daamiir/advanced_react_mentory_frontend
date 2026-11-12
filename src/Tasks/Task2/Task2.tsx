import { useEffect } from "react";
import courses from "../../courses.json";

interface Course {
  id: string;
  title: string;
}

const CourseCard = ({ id, title }: Course) => {
  const handlerSelect = () => {
    localStorage.setItem("selected-course", id);
    console.log(`Selected course: ${id}`);
  };

  return (
    <div>
      <h3>{title}</h3>
      <button onClick={handlerSelect}>Select Course</button>
    </div>
  );
};

export const Task2 = () => {
  useEffect(() => {
    const id = localStorage.getItem("selected-course");
    console.log("Selected course from localStorage:", id);
  }, []);

  return (
    <div>
      {courses.map((course) => (
        <CourseCard key={course.id} id={course.id} title={course.title} />
      ))}
    </div>
  );
};
