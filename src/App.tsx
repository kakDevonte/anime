import React from 'react';
import './App.scss';
import { AnimesPage } from './pages/AnimesPage';

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <AnimesPage />
    </div>
  );
};
