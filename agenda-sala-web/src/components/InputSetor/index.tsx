import { SelectHTMLAttributes } from "react";
import { ISetor } from "../../interfaces/ISetor";
import { ContainerSelect, SelectSetor, Titulo } from "./styles";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    setores: ISetor[];
    titulo?: string;
  }
  
  
  function InputSetor({ titulo, setores, ...rest } : Props) {
    return (
   
        <ContainerSelect>
          <Titulo>{titulo}</Titulo>  
          <SelectSetor {...rest}>
            {setores.map((s) => <option key={s.id} value={s.id}>{ s.nome }</option>)}
          </SelectSetor>
        </ContainerSelect>
     
    )
  }
  
  export default InputSetor