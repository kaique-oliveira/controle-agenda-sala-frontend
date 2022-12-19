export const useHorarios = () => ({
   
    
    gerarHoras: () => { 
        let horas: number[] = [];
        for (let index = 8; index <= 18; index++) {
            horas.push(index);
        }
          return horas;
      },
    
    gerarMinutos: () => {
        let minutos: number[] = [];
        for (let index = 0; index <= 50; index += 10) {
          minutos.push(index);
      }
        return minutos;
      },
    
      gerarDuracoes: () => {
        let minutos: number[] = [];
        for (let index = 0; index <= 6; index ++) {
          minutos.push(index);
        }
        return minutos;
      }

});