export const obterMesesIntervalo = (dtInicio: string, dtFim: string): string[] => {
  const meses = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

  const dataInicio = new Date(dtInicio);
  const dataFim = new Date(dtFim);

  const mesInicio = dataInicio.getMonth();
  const mesFim = dataFim.getMonth(); 

  if (dataInicio > dataFim) {
    throw new Error('A data de início não pode ser posterior à data de fim.');
  }

  
  if (mesInicio <= mesFim) {
    return meses.slice(mesInicio, mesFim + 1);
  } else {
    return [...meses.slice(mesInicio), ...meses.slice(0, mesFim + 1)];
  }
};
