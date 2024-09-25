// TodoApp.tsx
import React, { useState } from 'react';
import { Todo } from '../types/types';
import TodoItem from './TodoItem';
import Button from './Button';
import '../css/index.css';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');

  const addTodo = () => {
    setTodos(prevTodos => {
      if (input.trim()) {
        return [...prevTodos, { id: Math.random().toString(36).substring(2), text: input, completed: false }];
      }
      return prevTodos;
    });
    setInput('');
  };

  const deleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  return (
    <div className="container">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={addTodo}>Add Todo</Button> {/* Button 컴포넌트 사용 */}
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onToggle={toggleTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;