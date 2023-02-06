import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
      <Route path='/reg' element={<RegistrationPage/>}></Route>
    </Routes>
  );
}

export default App;
