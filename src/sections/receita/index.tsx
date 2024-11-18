
import { SelectValue } from "../../components/select"

const dataIndice = ['Subestabelecido','dfdfhdfhsf']
export const Receita = () => {
    return (
        <div className="w-full">

            <div className="title text-center mt-6">receita</div>
            <div className="flex gap-4 justify-between">
                <SelectValue title='indice' options={dataIndice} />
                <SelectValue title='Mês' options={dataIndice} />
                <SelectValue title='Ano' options={dataIndice} />
            </div>
            
            {/* <TickPlacementBars />  */}
        </div>
    )
}