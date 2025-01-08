import { useEffect, useState } from 'react';

import TableInadimplente from '../../components/tables/tb-inadimplente';
import { api_dashboard } from '../../services/api';
import { getLastDate } from '../../utils/format-date';
import { inadimplenciaData } from '../../utils/format-data';

export default function Inadimplente() {
    const currentDate = new Date();
    const [inadimplencia, setInadimplencia] = useState<any[]>([]);
    const [data, setData] = useState<any>();
    const dt_inicio = getLastDate(currentDate.getFullYear(), currentDate.getMonth());
    const dt_fim = dt_inicio; 
    useEffect(() => {
      const fetchData = async () => {
        try{
            const response = await api_dashboard.get("/inadimplencia", {
                params: {
                    dt_inicio, dt_fim
                }
            })
            setData(response.data.data)



        } catch (err){
            console.error('sem dados')
        }
      }
    
    fetchData()
    }, [dt_inicio, dt_fim])
    useEffect(() => {
        if (data) {
          setInadimplencia(inadimplenciaData(data));
    
        }
    },[data])

  return (
    <div className="py-3 bg-white rounded-xl shadow-sm border-b-2">
      <h1 className="title text-dark-blue text-center">Inadimplência</h1>
      <TableInadimplente data={inadimplencia} />

    </div>
  );
}
