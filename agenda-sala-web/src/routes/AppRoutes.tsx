import { useLogin } from '../context/ContextLogin';
import {BrowserRouter as Router,  Routes, Route, Navigate} from 'react-router-dom';


import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';



//@ts-ignore
const PrivateRoute = ({children, redirectTo}) => {
    const { logado } = useLogin();

    console.log(logado)

    return logado ? children : <Navigate to={redirectTo}/>
};

const AppRoutes = () => {

       return(
                <Router>
                    <Routes>
                        <Route path='/home' element={
                            <PrivateRoute redirectTo='/'>
                                <HomePage/>
                            </PrivateRoute>
                        }/>
                        <Route  path='/' element={<LoginPage/>}/>
                    </Routes> 
                </Router>
 
       );
}

export default AppRoutes;
