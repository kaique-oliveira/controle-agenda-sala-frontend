import { useContext } from "react";
import { AuthContext } from "../context/Auth/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}