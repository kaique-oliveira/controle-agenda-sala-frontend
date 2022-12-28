import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes} from 'react-router-dom';
import { AuthProvider } from './contexts/Auth/AuthProvider';
import theme from './themes/theme'
import { AgendamentoProvider } from './contexts/Agendamento/AgendamentoProvider';
import Rotas from './routes/Rotas';
import { AdmUsuarioProvider } from './contexts/AdmUsuario/AdmUsuarioProvider';
import AdmSetorProvider from './contexts/AdmSetor/AdmSetorProvider';


const App = () => {

  return ( 
    <BrowserRouter>
      <AuthProvider>
        <AgendamentoProvider>
          <AdmUsuarioProvider>
            <AdmSetorProvider>
            <ThemeProvider theme={theme.COLORS}>         
              <Rotas/>
            </ThemeProvider>
            </AdmSetorProvider>
          </AdmUsuarioProvider>
        </AgendamentoProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App