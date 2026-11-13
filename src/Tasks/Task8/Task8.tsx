import { useState } from "react";
import courses from "../../courses.json";

type Category = "frontend" | "fullstack" | "quality" | "default";

interface SearchProps {
  query: string;
  onChange: (value: string) => void;
}

const Search = ({ query, onChange }: SearchProps) => (
  <label htmlFor="search">
    Search:
    <input
      id="search"
      type="text"
      value={query}
      onChange={(e) => onChange(e.target.value)}
    />
  </label>
);

interface FilterProps {
  category: Category;
  onChange: (value: Category) => void;
}

const Filter = ({ category, onChange }: FilterProps) => (
  <label htmlFor="filter">
    <select
      name="filter-by-category"
      id="filter"
      value={category}
      onChange={(e) => onChange(e.target.value as Category)}
    >
      <option value="default">Default</option>
      <option value="frontend">Frontend</option>
      <option value="fullstack">Fullstack</option>
      <option value="quality">Quality</option>
    </select>
  </label>
);

const ParentComponent = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("default");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredCourses = courses.filter((course) => {
    const matchesByTitle = course.title.toLowerCase().includes(normalizedQuery);
    const matchesByCategory =
      selectedCategory === "default" || course.category === selectedCategory;

    return matchesByTitle && matchesByCategory;
  });

  const handleReset = () => {
    setQuery("");
    setSelectedCategory("default");
  };

  return (
    <div>
      <div>
        <Search query={query} onChange={setQuery} />
        <Filter category={selectedCategory} onChange={setSelectedCategory} />
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>

      <div>
        <h2>Found courses: {filteredCourses.length}</h2>
      </div>

      {filteredCourses.length > 0 ? (
        <div>
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              style={{
                border: "1px solid black",
                padding: "8px 16px",
                maxWidth: "400px",
              }}
            >
              <h3>{course.title}</h3>
              <span>Category: {course.category}</span>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h3>Not found!</h3>
        </div>
      )}
    </div>
  );
};

export const Task8 = () => {
  return <ParentComponent />;
};
