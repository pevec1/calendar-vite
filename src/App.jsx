import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css";
import "./css/main.css";
import Calendar from "./Calendar";

function App() {
  const now = new Date(2017, 2, 8);

  // внутри компонента App:
  return <Calendar now={now} />;
}

export default App;
