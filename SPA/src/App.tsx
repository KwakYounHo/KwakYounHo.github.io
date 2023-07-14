import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './component/mainPage/main'

interface Props {}
const App:React.FC<Props> = () => {
  return (
    <>
      <h1>콘솔로그.헬로월드</h1>
      {/* <h1>아니 이게 벌써</h1>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes> */}
    </>
  )
}
export default App;