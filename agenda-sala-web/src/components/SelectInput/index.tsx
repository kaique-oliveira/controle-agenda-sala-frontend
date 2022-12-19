import { ISelectInput } from "../../interfaces/IComponents"
import { Body, Select } from "./style"

const SelectInput = ({ icon, titulo, isFocus, ...rest } : ISelectInput) => {
  return (
    <Body isFocus={isFocus}>
          {icon}
          {titulo}
          <Select { ...rest } />
    </Body>
  )
}

export default SelectInput