import { useState } from 'react';

export interface Todo {
    id: number;
    text: string;
    isDone: boolean;
}

const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>(() =>
    JSON.parse(localStorage.getItem('todos') ?? '[]')
  );

  const save = (newTodos: Todo[]) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const addTodo = (text: string) =>
    save([...todos, { id: Date.now(), text, isDone: false }]);

  const toggleTodo = (id: number) =>
    save(todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));

  const editTodo = (id: number, text: string) =>
    save(todos.map((t) => (t.id === id ? { ...t, text } : t)));

  const deleteTodo = (id: number) => save(todos.filter((t) => t.id !== id));

  return { todos, addTodo, toggleTodo, editTodo, deleteTodo };
}

export { useTodos };