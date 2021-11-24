import React from 'react';
import { NavBar } from './components/NavBar';
import './App.css';
import { UserAutorization } from './components/UserAutorization';

const App: React.FC = () => {
  // const [todos, setTodos] = useState<ITodo[]>([]);



  return (
    <>
      <NavBar />
      <UserAutorization />
    </>
  );
}

export default App;
