import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes} from 'react-router-dom';
import { AuthProvider } from './contexts/Auth/AuthProvider';
import theme from './themes/theme'
import { AgendamentoProvider } from './contexts/Agendamento/AgendamentoProvider';
import Rotas from './routes/Rotas';
import { AdmProvider } from './contexts/AdmUsuario/AdmUsuarioProvider';


const App = () => {

  return ( 
    <BrowserRouter>
      <AuthProvider>
        <AgendamentoProvider>
          <AdmProvider>
            <ThemeProvider theme={theme.COLORS}>         
              <Rotas/>
            </ThemeProvider>
          </AdmProvider>
        </AgendamentoProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App