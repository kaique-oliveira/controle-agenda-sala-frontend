import { useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { IBuscarSala } from '../../interfaces/IBuscar';
import { ICadastrarSala } from '../../interfaces/ICadastrar';
import { AdmSalaContext } from './AdmSalaContext';


const AdmSalaProvider = ({ children }: { children: JSX.Element }) => {
  
  const api = useApi();

  const [salas, setSalas] = useState<IBuscarSala[]>([]);
  const [salaRecup, setSalaRecup] = useState<ICadastrarSala>({} as ICadastrarSala);

  const recuperarSala = async (idSala : number) => {
      setSalaRecup(salas.find(s => s.id == idSala) as ICadastrarSala);
  }

  const buscarSalas = async () => {
      const response = await api.buscarSalas();
      if (response) {
          setSalas(response);
      }
  }

  const editarSala = async(sala : ICadastrarSala) => {
      const response = await api.editarSala(sala);
      if (response) {
          alert('Sala editada com sucesso!');
      }
  }

  const deletarSala = async (idSala: number) => {
      await api.deletarSala(idSala);
      buscarSalas();
  }

  return (
    <AdmSalaContext.Provider value={
        {
            salas,
            buscarSalas,
            editarSala,
            deletarSala,
            recuperarSala,
            salaRecup,
            setSalaRecup
        }}>
        {children}
    </AdmSalaContext.Provider>
)
}

export default AdmSalaProvider
