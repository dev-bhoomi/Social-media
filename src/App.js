
import './App.css';

import Hause from './pages/home/Hause';
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <>
 <HashRouter>
<Routes>
<Route path="/" element={<Hause />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/profile" element={<Profile />} />

</Routes>
</HashRouter> 

    </>
  )
}

export default App;
