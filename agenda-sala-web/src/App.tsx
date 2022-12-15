import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { RequireAuth } from './context/Auth/RequireAuth';
import CadastreSePage from './pages/CadastreSePage';


function App() {
  return (    
      <Routes>
        <Route path='/' element={ <LoginPage/> } />
        <Route path='/cadastrese' element={<CadastreSePage/>}/>
        <Route path='/home' element={
          //@ts-ignore
          <RequireAuth> <HomePage/> </RequireAuth>
        }/>
      </Routes>
  )  
}

export default App;
