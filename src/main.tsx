import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Pomodoro from './Pomodoro';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Pomodoro />
  </React.StrictMode>,
);
