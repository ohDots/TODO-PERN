import { Fragment } from 'react';
import './App.css';

//components

import InputTodo from './Components/inputtodo';
import ListTodos from './Components/ListTodo';


function App() {
  return (<Fragment>
    <div className="container">
    <InputTodo />
    <ListTodos />
    </div>
  </Fragment>)
}

export default App;
