import { useAuth } from "../../hooks/useAuth";
import LoginPage from "../../pages/LoginPage";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth();

    if (!auth.usuario) {
       return <LoginPage/> 
    }

    return children;
}