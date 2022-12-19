import FormAgendamento from '../../components/FormAgendamento'
import HeaderGlobal from '../../components/HeaderGlobal'
import ListaAgendamentos from '../../components/ListaAgendamentos'
import { Aside, Body, Section } from './styles'

const Home = () => {
  return (
      <Body>
        <HeaderGlobal/>
        <Aside>
          <FormAgendamento/>
        </Aside>

        <Section>      
          <ListaAgendamentos/>
        </Section>
      </Body>
  )
}

export default Home