import courses from "../../courses.json";

interface Course {
  id: string;
  title: string;
}

const CourseCard = ({ id, title }: Course) => {
  const handlerSelect = () => {
    localStorage.setItem("selected-course", id);
  };

  return (
    <div>
      <h3>{title}</h3>
      <button onClick={handlerSelect}>Select Course</button>
    </div>
  );
};

export const Task2 = () => {
  return (
    <div>
      {courses.map((course) => (
        <CourseCard key={course.id} id={course.id} title={course.title} />
      ))}
    </div>
  );
};
