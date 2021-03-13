import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar.component';
import Tasks from './Tasks/Tasks.container';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <div className="App">
      <NavBar />
      <Tasks />
    </div>
  )
}

export default App;
