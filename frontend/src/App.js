import React from 'react';
import './App.css';
import ProjectList from './components/ProjectList';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Management App</h1>
        <ProjectList />
        <TaskList />
      </header>
    </div>
  );
}

export default App;