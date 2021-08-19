import React from 'react';
import ReactDOM from 'react-dom';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { HookApp } from './HookApp';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { CounterWIthCustomHook } from './components/01-useState/CounterWIthCustomHook';
// import { FormWithCustomHooks } from './components/02-useEffect/FormWIthCustomHooks';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import Layout from './components/05-useLayoutEffect/LayoutEffect';
// import { Memorize } from './components/06-memos/Memorize';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { CallbackHook } from './components/06-memos/CallbackHook';
// import Padre from './components/07-tarea-memo/Padre';
// import { TodoApp } from './components/08-useReducer/TodoApp';
import MainApp from './components/09-useContext/MainApp';


// import './components/08-useReducer/intro-reducer';

ReactDOM.render(
    <MainApp/>,
  document.getElementById('app')
);