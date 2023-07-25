import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './component/main/main'

interface Props {}
const App: React.FC<Props> = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  )
}
export default App;