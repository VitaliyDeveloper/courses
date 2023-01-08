import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import ServisesPage from 'pages/ServisesPage';
import NotFound from './NotFound/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/servises" element={<ServisesPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
