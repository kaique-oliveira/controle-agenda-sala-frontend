import { useContext } from "react";
import { AdmSetorContext } from "../contexts/AdmSetor/AdmSetorContext";

export const useAdmSetor = () => {
    const context = useContext(AdmSetorContext);
    return context;
}