import React, { useEffect, useState } from 'react'
import { FaAudioDescription, FaSave, FaTimes } from 'react-icons/fa'
import { useAdmSala } from '../../hooks/useAdmSala'
import { useApi } from '../../hooks/useApi'
import { useAuth } from '../../hooks/useAuth'
import { ICadastrarSala } from '../../interfaces/ICadastrar'
import ActionButton from '../ActionButton'
import TextInput from '../TextInput'
import { Body, Buttons, Form, Inputs } from './styles'

const FormAdmSala = () => {

    const { salaRecup, setSalaRecup } = useAdmSala();
    const { buscarSalas } = useAuth();
    const api = useApi();

    const [focoNome, setFocoNome] = useState<boolean>(false);
    const [id, setId] = useState<number>(0);
    const [nome, setNome] = useState<string>('');

    useEffect(() => {
        if (salaRecup.id) {
        recuperarDados();
        }
    }, [salaRecup]);


    const handlerSave = async () => {
        if(nome){ 

            const dadosSala : ICadastrarSala = 
            {
                id: id,
                nome: nome
            }
        
        if (dadosSala.id == 0) {
            const response = await api.cadastrarSala(dadosSala);

            if (response) {
            alert(response);
            buscarSalas();
            limparCampos();
            }
        } 
        else {
            const response = await api.editarSala(dadosSala);

            if (response) {
            alert(response);
            buscarSalas();
            limparCampos();
            }
        }
                
        }else{
        alert("Preencha todos os campos!")
        }
    }

    const recuperarDados = () => {
        setId(salaRecup.id);
        setNome(salaRecup.nome)
    }

    const limparCampos = () => {
        setId(0);
        setNome('');
        setSalaRecup({} as ICadastrarSala);
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

export default FormAdmSala
