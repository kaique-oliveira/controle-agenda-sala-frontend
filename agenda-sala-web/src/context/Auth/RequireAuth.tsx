import { Loading } from "../../components/Loading";
import { useAuth } from "../../hooks/useAuth";
import LoginPage from "../../pages/LoginPage";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth();

   
    if (auth.isLoading && auth.usuario) {
        return <Loading />
    }

    return auth.usuario ? children : <LoginPage/> ;
}