import { useContext } from "react";
import { AdmSalaContext } from "../contexts/AdmSala/AdmSalaContext";

export const useAdmSala = () => {
    const context = useContext(AdmSalaContext);
    return context;
}