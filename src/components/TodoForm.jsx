import { useState, useEffect, useRef } from "react";
import { useTodoLayerValue } from "@/contexts/TodoContext";
import styles from "@/styles/Todo.module.css";

const TodoForm = () => {
  // Todo context hook
  const [{ todos }, dispatch] = useTodoLayerValue();
  // State for todo input
  const [content, setContent] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    // Initially focus on todo input element
    inputRef.current.focus();
  }, []);

  // Event handlers
  const handleChange = (event) => setContent(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!content || content.length < 1) return;

    const newTodo = {
      id: Math.floor(Math.random() * 428374324), // Generating random ID
      content: content,
      isCompleted: false, // Initially todo is not completed
    };

    // Dispatch takes an action object as parameter
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });

    setContent("");
  };

  return (
    //
    <form onSubmit={handleSubmit} className={styles["todo-form"]}>
      <input
        type="text"
        className={styles["todo-input"]}
        onChange={handleChange}
        value={content}
        ref={inputRef}
      />
      <button className={styles["todo-button"]}>Add Todo</button>
    </form>
  );
};

export default TodoForm;
