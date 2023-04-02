import Todo from "./Todo";
import { useTodoLayerValue } from "@/contexts/TodoContext";
import styles from "@/styles/Todo.module.css";

const TodoList = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();

  return (
    <div className={styles["todo-list"]}>
      {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;
