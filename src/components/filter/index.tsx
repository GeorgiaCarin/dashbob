
import { SelectValue } from '../select'
type props = {
  indices: string[],
  mes: string[],
  ano: string[]
}
export default function Filter({indices,mes,ano}:props) {
  return (
    <div className="flex flex-col gap-2 bg-white shadow-sm p-2 rounded-xl ">
        <div className="title text-center">receita</div>
        <div className="flex gap-4 justify-between">
            <SelectValue title='indice' options={indices} />
            <SelectValue title='Mês' options={mes} />
            <SelectValue title='Ano' options={ano} />
        </div>
    </div>
  )
}
