import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppEditor from './components/AppEditor'
import NewTab from './components/newTab/NewTab'

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<AppEditor />} />
          <Route path="/newtab" element={<NewTab />} />
        </Routes>
    </>
  );
}

export default App