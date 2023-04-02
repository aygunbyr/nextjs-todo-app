import { useState } from "react";
import clsx from "clsx";
import { GrFormClose, GrFormEdit, GrFormCheckmark } from "react-icons/gr";
import { useTodoLayerValue } from "@/contexts/TodoContext";
import styles from "@/styles/Todo.module.css";

const Todo = ({ todo }) => {
  // Todo context hook
  const [{}, dispatch] = useTodoLayerValue();

  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState(todo.content);

  // Event handlers
  const removeTodo = (todoId) => {
    dispatch({ type: "REMOVE_TODO", payload: todoId });
  };

  const completeTodo = (todoId) => {
    dispatch({ type: "COMPLETE_TODO", payload: todoId });
  };

  const updateTodo = ({ todoId, newValue }) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: {
        todoId,
        newValue,
      },
    });
  };

  const handleEdit = () => {
    updateTodo({ todoId: todo.id, newValue: content });

    setContent("");
    setEditable(false);
  };

  const todoStyle = clsx({
    [styles["todo-row"]]: true,
    [styles["completed"]]: todo.isCompleted,
  });

  return (
    <div className={todoStyle}>
      <div onClick={() => (editable ? null : completeTodo(todo.id))}>
        {editable ? (
          <input
            type="text"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className={styles["todo-input-edit"]}
          />
        ) : (
          todo.content
        )}
      </div>
      <div className={styles["todo-icons"]}>
        <GrFormClose
          className={styles["todo-icon"]}
          onClick={() => removeTodo(todo.id)}
        />
        {editable ? (
          <GrFormCheckmark
            className={styles["todo-icon"]}
            onClick={handleEdit}
          />
        ) : (
          <GrFormEdit
            className={styles["todo-icon"]}
            onClick={() => setEditable(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Todo;
