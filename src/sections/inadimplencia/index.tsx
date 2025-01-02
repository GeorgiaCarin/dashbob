
import { inadimplencia } from '../../assets/data/data-example'
import TableInadimplente from '../../components/tables/tb-inadimplente'
import { api_dashboard } from '../../services/api'
export default function Inadimplente() {
  const inadimplenciaData = async () => {
    try {
      const response = await api_dashboard.post('inadimplencia',{
        dt_inicio: '2024-01-01',
        dt_fim: '2024-01-01'
      })
      console.log(response)
    } catch (error) {
      console.log('erro ao pegar dados',error)

    }
  }


  return (
    <div className=" py-3 bg-white rounded-xl shadow-sm border-b-2">
        <h1 className="title text-dark-blue text-center">Inadimplência</h1>   
        <TableInadimplente data={inadimplencia} />
        <button onClick={inadimplenciaData}>teste</button>
    </div>
  )
}
