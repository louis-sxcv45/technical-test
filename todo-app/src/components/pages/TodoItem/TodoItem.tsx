import { useState } from 'react';
import Button from '../../ui/Button';
import type { Todo } from '../../../hooks/useTodos';

interface PropTypes {
  todo: Todo;
  onToggle: (id: number) => void;
  onEdit: (id: number, text: string) => void;
  onDelete: (id: number) => void;
}

const TodoItem = (props: PropTypes) => {
  const { todo, onToggle, onEdit, onDelete } = props;
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  const save = () => {
    if (draft.trim()) onEdit(todo.id, draft.trim());
    setEditing(false);
  };

  return (
    <li className="flex items-center gap-2 border-t border-gray-200 py-3">
      <input
        type="checkbox"
        className="h-4 w-4 accent-indigo-600"
        checked={todo.isDone}
        onChange={() => onToggle(todo.id)}
      />

      {editing ? (
        <>
          <input
            autoFocus
            className="min-w-0 flex-1 rounded-lg border border-gray-300 px-2 py-1 outline-none focus:border-indigo-500"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && save()}
          />
          <Button onClick={save}>Simpan</Button>
        </>
      ) : (
        <>
          <span
            className={`min-w-0 flex-1 wrap-break-word ${
              todo.isDone ? 'text-gray-400 line-through' : 'text-gray-800'
            }`}
          >
            {todo.text}
          </span>
          <Button
            variant="ghost"
            onClick={() => {
              setDraft(todo.text);
              setEditing(true);
            }}
          >
            Edit
          </Button>
        </>
      )}

      <Button variant="danger" onClick={() => onDelete(todo.id)}>
        Hapus
      </Button>
    </li>
  );
};

export default TodoItem;