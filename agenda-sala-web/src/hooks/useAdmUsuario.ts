import { useContext } from "react";
import { AdmUsuarioContext } from "../contexts/AdmUsuario/AdmUsuarioContext";

export const useAdmUsuario = () => {
    const context = useContext(AdmUsuarioContext);
    return context;
}