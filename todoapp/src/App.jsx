import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { getList, postTodo, putTodo, removeTodo } from "./common/todoApi";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // todoList 요청
  useEffect(() => {
    getList().then((data) => {
      console.log(data);
      setTodos(data);
      setLoading(false);
    });
  }, []);

  // 할 일 입력 시 todoList에 추가
  const onInsert = useCallback(
    (text) => {
      const newTodo = {
        content: text,
        completed: false,
      };
      postTodo(newTodo).then((data) => {
        setTodos(todos.concat(data));
      });
    },
    [todos]
  );

  // 할 일 제거 시 todoList에서 제거
  const onRemove = useCallback(
    (id) => {
      removeTodo(id).then((data) => {
        console.log("삭제 ", data);
      });
      setTodos(todos.filter((todo) => todo.id != id));
    },
    [todos]
  );

  // 체크하면 true / false로 변경
  const onToggle = useCallback(
    (id) => {
      // 업데이트할 todo찾기
      const oriTodo = todos.find((todo) => todo.id == id);
      const updateTodo = { ...oriTodo, completed: !oriTodo.completed };
      
      putTodo(updateTodo).then((data) => console.log(data));

      setTodos(todos.map((todo) => (todo.id === id ? updateTodo : todo)));
    },
    [todos]
  );

  if (loading) {
    return <div className="text-4xl font-extrabold text-orange-400 m-20">로딩 중...</div>;
  }

  if (!todos) {
    return null;
  }

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
}

export default App;
