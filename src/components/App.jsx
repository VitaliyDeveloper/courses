import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import ServisesPage from 'pages/ServisesPage';
import GalleryPage from 'pages/GalleryPage';
import NotFound from './NotFound/NotFound';
import { useDispatch } from 'react-redux';
import { useEffect, useSelector } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
// import { selectIsFetchingCurrentUser } from 'redux/auth/auth-selector';

export const App = () => {
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {/* {!isFetchingCurrentUser ? (
        <h3>FDFDFDFDFDF</h3>
      ) : ( */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/servises" element={<ServisesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* )} */}
    </>
  );
};
