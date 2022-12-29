import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes} from 'react-router-dom';
import { AuthProvider } from './contexts/Auth/AuthProvider';
import theme from './themes/theme'
import { AgendamentoProvider } from './contexts/Agendamento/AgendamentoProvider';
import Rotas from './routes/Rotas';
import { AdmUsuarioProvider } from './contexts/AdmUsuario/AdmUsuarioProvider';
import AdmSetorProvider from './contexts/AdmSetor/AdmSetorProvider';
import AdmSalaProvider from './contexts/AdmSala/AdmSalaProvider';


const App = () => {

  return ( 
    <BrowserRouter>
      <AuthProvider>
        <AgendamentoProvider>
          <AdmUsuarioProvider>
            <AdmSetorProvider>
              <AdmSalaProvider>
                <ThemeProvider theme={theme.COLORS}>         
                  <Rotas/>
                </ThemeProvider>
              </AdmSalaProvider>
            </AdmSetorProvider>
          </AdmUsuarioProvider>
        </AgendamentoProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App