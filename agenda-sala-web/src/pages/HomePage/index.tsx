import { ContainerBody, ContainerMain } from './styles';
import Header from "../../components/Header";
import Agendamentos from "../../components/Agendamentos";
import { AgendamentoProvider } from '../../context/Agendamentos/AgendamentoProvider';

const HomePage = () => {
    return (
      <AgendamentoProvider>
        <ContainerBody>
          <Header />
  
          <ContainerMain>
            <Agendamentos />
          </ContainerMain>
        
        </ContainerBody>
      </AgendamentoProvider >
  
    )
}

export default HomePage;
