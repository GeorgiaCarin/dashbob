
import { SelectValue } from '../select'
type props = {
  mes: string[],
  ano: string[],
  title: string
}
export default function Filter({title, mes, ano}:props) {
  return (
    <div className="flex flex-col gap-2 bg-white shadow-sm p-2 rounded-xl ">
        <div className="title text-center">{title}</div>
        <div className="flex gap-4 justify-between">
            <SelectValue title='Mês' options={mes} />
            <SelectValue title='Ano' options={ano} />
        </div>
    </div>
  )
}
