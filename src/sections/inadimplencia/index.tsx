
import { inadimplencia } from '../../assets/data/data-example'
import TableInadimplente from '../../components/tables/tb-inadimplente'
export default function Inadimplente() {
  return (
    <div className=" py-3 bg-white rounded-xl shadow-sm border-b-2">
        <h1 className="title text-dark-blue text-center">Inadimplência</h1>   
        <TableInadimplente data={inadimplencia} />
            
    </div>
  )
}
