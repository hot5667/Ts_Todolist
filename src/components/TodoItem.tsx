import React from 'react';
import { Todo } from '../types/types';
import Button from './Button';

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle }) => {
  return (
    <li>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      <Button onClick={() => onToggle(todo.id)}>{todo.completed ? 'Undo' : 'Complete'}</Button>
      <Button onClick={() => onDelete(todo.id)}>Delete</Button>
    </li>
  );
};

export default TodoItem;