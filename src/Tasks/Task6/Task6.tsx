import { useRef, useState } from "react";

const ControlledFilter = () => {
  const [value, setValue] = useState("");

  const handleReset = () => {
    setValue("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <h3>Controlled Filter: {value}</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

const UncontrolledFilter = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (inputRef.current) {
      setValue(inputRef.current.value);
    }
  };

  const handleReset = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setValue("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <h3>Uncontrolled Filter: {value}</h3>
      <input type="text" defaultValue="" ref={inputRef} />
      <div style={{ display: "flex", gap: "8px" }}>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export const Task6 = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      maxWidth: "220px",
    }}
  >
    <ControlledFilter />
    <UncontrolledFilter />
  </div>
);
