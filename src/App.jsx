import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import Api from './Api'

const App = () => {
  return (
    <>
    <Sidebar/>
    <Main />
    <Api />
    </>
  )
}

export default App