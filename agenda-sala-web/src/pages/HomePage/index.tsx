import { ContainerBody, ContainerMain } from './styles';
import Header from "../../components/Header";
import Agendamentos from "../../components/Agendamentos";

const HomePage = () => {

  return (
    <ContainerBody>
      <Header />
      
      <ContainerMain> 
        <Agendamentos />
      </ContainerMain>
    </ContainerBody>
  )
}

export default HomePage;
