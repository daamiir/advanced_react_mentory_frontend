import { useState } from "react";

export interface Course {
  id: string;
  title: string;
  category: string;
  seats: number;
  version: number;
}

export const useCourses = (courses: Course[]) => {
  const [items] = useState<Course[]>(courses);
  const [selectedId, setSelectedId] = useState<string | null>(() =>
    localStorage.getItem("selected-course"),
  );

  const handlerSelect = (id: string) => {
    setSelectedId(id);
    localStorage.setItem("selected-course", id);
  };

  return { items, selectedId, handlerSelect };
};
