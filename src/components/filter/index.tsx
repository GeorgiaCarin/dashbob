
import { SelectValue } from '../select'
const dataIndice = ['Subestabelecido','dfdfhdfhsf']
export default function Filter() {
  return (
    <div className="flex flex-col gap-2 bg-white shadow-sm p-2 rounded-xl ">
        <div className="title text-center">receita</div>
        <div className="flex gap-4 justify-between">
            <SelectValue title='indice' options={dataIndice} />
            <SelectValue title='Mês' options={dataIndice} />
            <SelectValue title='Ano' options={dataIndice} />
        </div>
    </div>
  )
}
