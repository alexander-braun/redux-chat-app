import React from 'react'
import './App.css';
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import store from '../store'

const App = () => {
  const { contacts } = store.getState()
  console.log(contacts)
  return (
    <div className="App">
      <Sidebar contacts={Object.values(contacts)}/>
      <Main />
    </div>
  )
}

export default App