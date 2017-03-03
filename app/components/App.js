import React from 'react'
import { render } from 'react-dom';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import RadioContainer from '../containers/RadioContainer'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <RadioContainer />
  </div>
)

export default App
