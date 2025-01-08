import { inadimplencia } from '../../assets/data/data-example';
import TableInadimplente from '../../components/tables/tb-inadimplente';
import { api_dashboard } from '../../services/api';
import { getLastDate } from '../../utils/format-date';

export default function Inadimplente() {
  const inadimplenciaData = async () => {
    const currentDate = new Date();
    const dt_inicio = getLastDate(currentDate.getFullYear(), currentDate.getMonth());
    const dt_fim = dt_inicio; 
    
    try {
      const response = await api_dashboard.get('inadimplencia', {
        params: {
          dt_inicio,
          dt_fim,
        },
      });
      console.log('Resposta da API:', response);
    } catch (error) {
      console.log('Erro ao pegar dados:', error);
    }
  };

  return (
    <div className="py-3 bg-white rounded-xl shadow-sm border-b-2">
      <h1 className="title text-dark-blue text-center">Inadimplência</h1>
      <TableInadimplente data={inadimplencia} />
      <button onClick={inadimplenciaData}>Teste</button>
    </div>
  );
}
