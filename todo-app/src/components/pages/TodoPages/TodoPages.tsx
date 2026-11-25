import { useState } from 'react';
import Button from '../../ui/Button';
import TodoItem from '../TodoItem';
import { useTodos } from '../../../hooks/useTodos';

const TodoPage = () => {
  const { todos, addTodo, toggleTodo, editTodo, deleteTodo } = useTodos();
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input.trim());
    setInput('');
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow">
        <h1 className="text-2xl font-bold text-gray-900">Todo List</h1>
        <p className="mb-4 text-sm text-gray-500">
          {todos.filter((t) => !t.isDone).length} dari {todos.length} tugas belum selesai
        </p>

        <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
          <input
            className="min-w-0 flex-1 rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-indigo-500"
            placeholder="Tambah tugas..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit">Tambah</Button>
        </form>

        {todos.length === 0 && (
          <p className="py-6 text-center text-gray-400">Belum ada tugas.</p>
        )}

        <ul>
          {todos.map((t) => (
            <TodoItem
              key={t.id}
              todo={t}
              onToggle={toggleTodo}
              onEdit={editTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoPage;