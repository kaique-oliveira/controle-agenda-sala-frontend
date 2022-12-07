import AppRoutes from './routes/AppRoutes'
import { useLogin } from './context/ContextLogin';
import { Routes, Route, Navigate} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

//@ts-ignore
const PrivateRoute = ({children, redirectTo}) => {
  const { logado } = useLogin();

  console.log(logado)

  return logado ? children : <Navigate to={redirectTo}/>
};

function App() {
  return (    
        <Routes>
          <Route path='/home' element={
                              <PrivateRoute redirectTo='/'>
                                  <HomePage/>
                              </PrivateRoute>
                          }/>
          <Route  path='/' element={<LoginPage/>}/>
        </Routes>
  )  
}

export default App;
