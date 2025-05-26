import { useCallback, useRef, useState } from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

// 화면단에서 데이터 생성 후 수정, 삭제, 입력 작성

function App2() {
  const todoList = [
    {
      id: 1,
      title: "react 기초 알아보기",
      completed: true,
    },
    {
      id: 2,
      title: "컴포넌트 스타일링 하기",
      completed: false,
    },
    {
      id: 3,
      title: "일정관리 앱 작성",
      completed: false,
    },
    {
      id: 4,
      title: "서버 프로그램 연동",
      completed: false,
    },
  ];
  // 화면 재렌더링 시에도 id값을 기억해 주세요: useRef
  const nextId = useRef(5);
  const [todos, setTodos] = useState(todoList);

  // 할 일 입력 시 todoList에 추가
  const onInsert = useCallback(
    (text) => {
      const newTodo = {
        id: nextId.current,
        title: text,
        completed: false,
      };
      setTodos(todos.concat(newTodo));
      nextId.current += 1;
    },
    [todos]
  );

  // 할 일 제거 시 todoList에서 제거
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id != id));
    },
    [todos]
  );

  // 체크하면 true / false로 변경
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        )
      );
    },
    [todos]
  );

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
}

export default App2;
