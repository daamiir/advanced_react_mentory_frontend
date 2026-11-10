import { useEffect, useRef, useState } from "react";

interface ChildProps {
  title: string;
}

const ChildComponent = ({ title }: ChildProps) => {
  const ref = useRef<HTMLDivElement>(null);

  console.log("[Render] Child component rendered");

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "childList" ||
          mutation.type === "characterData"
        ) {
          console.log("[Commit] Child DOM updated");
        }
      }
    });

    if (ref.current) {
      observer.observe(ref.current, {
        characterData: true,
        childList: true,
        subtree: true,
      });
    }

    console.log("Child component mounted");

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={ref}>{title}</div>;
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Hello from Child Component");

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Counter: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() =>
          setTitle(`Hello from Child Component with new title: ${Date.now()}`)
        }
      >
        Change Child Title
      </button>

      <ChildComponent title={title} />
    </div>
  );
};

export const Task1 = () => {
  return (
    <>
      <ParentComponent />
    </>
  );
};
