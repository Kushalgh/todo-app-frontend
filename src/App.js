import React, {Fragment} from 'react';
import './App.css';


//Components

import InputTodo from './components/InputTodos';
import ListTodos from './components/ListTodos';

function App() {
  return <Fragment>
    <div className='container'>
        <InputTodo />
        <ListTodos />

    </div>
    
  </Fragment>
    
  
}

export default App;
