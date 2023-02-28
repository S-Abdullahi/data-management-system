import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/Login/LoginPage'
import ForgetPassword from './Pages/Login/ForgetPassword'
import ResetPassword from './Pages/Login/ResetPassword'
import SharedUserLayout from './Pages/User/SharedUserLayout'
import Main from './Pages/User/Main'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='login' element={<LoginPage/>}></Route>
      <Route path='forget_password' element={<ForgetPassword/>}></Route>
      <Route path='reset_password' element={<ResetPassword/>}></Route>
      <Route path='user' element={<SharedUserLayout/>}>
        <Route index element={<Main/>}/>
       </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App