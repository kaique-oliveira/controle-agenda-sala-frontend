import React, { useState } from 'react'
import { FaAudioDescription, FaSave, FaTimes } from 'react-icons/fa';
import ActionButton from '../ActionButton';
import TextInput from '../TextInput'
import { Body, Buttons, Form, Inputs } from './styles'

const FormAdmSetor = () => {

    const [focoNome, setFocoNome] = useState<boolean>(false);
    const [id, setId] = useState<number>(0);
    const [nome, setNome] = useState<string>('');

  return (
      <Body>
        <Form>
            <Inputs>
                <TextInput
                    isFocus={focoNome}
                    icon={<FaAudioDescription/>}
                    tipo="text"
                    placeholder="nome do setor"
                    onFocus={() => setFocoNome(true)}
                    onBlur={() => setFocoNome(false)}
                    onChange={n => setNome(n.target.value)}
                    value={nome}
                />
            </Inputs>
            <Buttons>
                <ActionButton
                    icon={ <FaTimes/> }
                    titulo="cancelar"

                  />

                <ActionButton
                    icon={ <FaSave/> }
                    titulo="salvar"

                  />
            </Buttons>
        </Form>
      </Body>
  )
}

export default FormAdmSetor
