import LandingPage from 'pages/LandingPage';
import TodoDetailPage from 'pages/TodoDetailPage';
import TodoFormPage from 'pages/TodoFormPage';
import TodoListPage from 'pages/TodoListPage';
import { Routes, Route } from 'react-router-dom';

const TodoRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/todolist" element={<TodoListPage />} />
      <Route path="/todoform" element={<TodoFormPage />} />
      <Route path="/tododetail/:id" element={<TodoDetailPage />} />
    </Routes>
  );
};

export default TodoRouter;
