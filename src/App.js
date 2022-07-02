import React from "react";
import { BrowserRouter } from 'react-router-dom';

import Routes from './routing/Routes';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
