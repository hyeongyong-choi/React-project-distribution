import LandingPage from 'pages/LandingPage';
import TodoDetailPage from 'pages/TodoDetailPage';
import TodoFormPage from 'pages/TodoFormPage';
import TodoListPage from 'pages/TodoListPage';
import { Routes, Route } from 'react-router-dom';

const TodoRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/todo/add" element={<TodoFormPage />} />
      <Route path="/todos" element={<TodoListPage />} />
      <Route path="/todos/:id" element={<TodoDetailPage />} />
    </Routes>
  );
};

export default TodoRouter;
