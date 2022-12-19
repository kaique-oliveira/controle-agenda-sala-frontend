import { useContext } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}