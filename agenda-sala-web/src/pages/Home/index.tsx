import { useEffect, useState } from 'react'
import { FaCalendarTimes } from 'react-icons/fa'
import CardAgendamento from '../../components/CardAgendamento'
import FormAgendamento from '../../components/FormAgendamento'
import HeaderGlobal from '../../components/HeaderGlobal'
import { useAgendamento } from '../../hooks/useAgendamento'
import { useApi } from '../../hooks/useApi'
import { IBuscarSala } from '../../interfaces/IBuscar'
import theme from '../../themes/theme'
import { Aside, Body, BodySection, HeaderSection, Section, Titulo } from './styles'

const Home = () => {
  const {idSala, data, agendamentos} = useAgendamento();
  const api = useApi();

  const [nomeSala, setNomeSala] = useState<string>('');

  useEffect(() => {
    
    if(idSala != 0){
      buscarNomeSala();
    }
    
  }, [idSala])

  const buscarNomeSala = async() => {
    const response = await api.buscarPorId(idSala) as IBuscarSala;
    setNomeSala(response.nome)
  }
  return (
      <Body>
        <HeaderGlobal/>
        <Aside>
          <FormAgendamento/>
        </Aside>

        <Section>    
          <HeaderSection>
            <Titulo>{`${idSala ? nomeSala : 'Selecione uma sala' } - ${data.toLocaleDateString()}`}</Titulo>
          </HeaderSection>  

          <BodySection>
              {
                agendamentos.length != 0 ? agendamentos.map((a) => {
                    return (
                    <CardAgendamento
                        key={a.id}
                        agendamento={a}
                    />
                    );
                }) : <FaCalendarTimes size={50} color={theme.COLORS.FUNDOINPUT}/>
              }
          </BodySection>
          
        </Section>
      </Body>
  )
}

export default Home