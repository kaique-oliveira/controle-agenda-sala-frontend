import Loading from "../../components/Loading";
import { useAuth } from "../../hooks/useAuth";
import { IRequireAuth } from "../../interfaces/IContexts";
import Login from "../../pages/Login";


export const RequireAuth = ({ children } : IRequireAuth) => {
    const auth = useAuth();
   
    if (auth.isLoading && auth.usuario) {
        return <Loading />
    }

    return auth.usuario ? children : <Login/> ;
}