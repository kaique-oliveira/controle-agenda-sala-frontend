import React, { useEffect, useState } from 'react'
import { FaAudioDescription, FaSave, FaTimes } from 'react-icons/fa';
import { useAdmSetor } from '../../hooks/useAdmSetor';
import { useApi } from '../../hooks/useApi';
import { ICadastrarSetor } from '../../interfaces/ICadastrar';
import ActionButton from '../ActionButton';
import TextInput from '../TextInput'
import { Body, Buttons, Form, Inputs } from './styles'

const FormAdmSetor = () => {

  const {setorRecup, setSetorRecup, buscarSetores} = useAdmSetor();
  const api = useApi();

  const [focoNome, setFocoNome] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const [nome, setNome] = useState<string>('');

  useEffect(() => {
    if (setorRecup.id) {
      recuperarDados();
    }
  }, [setorRecup]);


  const handlerSave = async () => {
    if(nome){ 

        const dadosSetor : ICadastrarSetor = 
        {
          id: id,
          nome: nome
        }
      
      if (dadosSetor.id == 0) {
        const response = await api.cadastrarSetor(dadosSetor);

        if (response) {
          alert(response);
          buscarSetores();
          limparCampos();
        }
      } 
      else {
        const response = await api.editarSetor(dadosSetor);

        if (response) {
          alert(response);
          buscarSetores();
          limparCampos();
        }
      }
            
    }else{
      alert("Preencha todos os campos!")
    }


  }

  const recuperarDados = () => {
    setId(setorRecup.id);
    setNome(setorRecup.nome)
  }

  const limparCampos = () => {
    setId(0);
    setNome('');
    setSetorRecup({} as ICadastrarSetor);
  }

  const handlerSubmit = (event: any) => {
    event.preventDefault();
  }

  return (
      <Body>
        <Form onSubmit={handlerSubmit}>
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
                    onClick={limparCampos}
                  />

                <ActionButton
                    icon={ <FaSave/> }
                    titulo="salvar"
                    onClick={handlerSave}
                  />
            </Buttons>
        </Form>
      </Body>
  )
}

export default FormAdmSetor
