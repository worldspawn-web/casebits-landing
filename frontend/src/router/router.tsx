import { FC } from 'react';
import { Route, Routes } from 'react-router';
import { routenames } from './routenames';
import { MainPage } from '../pages/MainPage/MainPage';

export const Router: FC = () => (
  <Routes>
    <Route path={routenames.HOME} element={<MainPage />} />
  </Routes>
);
