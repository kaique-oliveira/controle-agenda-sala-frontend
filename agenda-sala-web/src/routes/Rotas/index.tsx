import { Route, Routes } from 'react-router-dom';
import Loading from '../../components/Loading';
import { RequireAuth } from '../../contexts/Auth/RequireAuth';
import { useAuth } from '../../hooks/useAuth';
import Administracao from '../../pages/Administracao';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Perfil from '../../pages/Perfil';
import Usuario from '../../pages/Usuario';


const Rotas = () => {
    const { isLoading } = useAuth();

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/cadastre-se' element={ <Usuario/> } />
            <Route path='/home' element={ 
                //@ts-ignore
                <RequireAuth> <Home/> </RequireAuth>
            } />             
            <Route path='/administracao' element={ 
                //@ts-ignore
                <RequireAuth> <Administracao/> </RequireAuth>
            } /> 
             <Route path='/editar/perfil' element={ 
                //@ts-ignore
                <RequireAuth> <Perfil/> </RequireAuth>
            } /> 
            
            
       </Routes>
   )

}

export default Rotas