import SimpleBarChart from "../../components/charts/bar-chart"
import { SelectValue } from "../../components/select"
import { TableReceita } from "../../components/tables/tb-receita"
import ExpandCircleDown from "@mui/icons-material/ExpandCircleDown"
import {indices as data} from "../../assets/data/data-receita"
import { formatCurrency } from "../../utils/format-currency"
const dataIndice = ['Subestabelecido','dfdfhdfhsf']
export const Receita = () => {
    return (
        <div className="w-full p-2 flex flex-col gap-4 bg-white shadow-[0px_2px_16px_-8px_rgba(0,_0,_0,_0.25)] rounded-lg">
            <div className=" bg-white shadow-sm p-2 rounded-xl ">
                <div className="title text-center">receita</div>
                <div className="flex gap-4 justify-between">
                    <SelectValue title='indice' options={dataIndice} />
                    <SelectValue title='Mês' options={dataIndice} />
                    <SelectValue title='Ano' options={dataIndice} />
                </div>
            </div>
            <div className=" bg-white p-2 shadow-md rounded-xl">
                <div className="flex justify-between">
                    <div>
                        <div className="">{data[0].name}</div>
                        <div className="title text-secondary-green">{formatCurrency(data[0].faturamento)}</div>
                    </div>
                    <div className="label flex justify-center text-center"><ExpandCircleDown />   65%</div>
                </div>
                <SimpleBarChart />

            </div>
            <TableReceita data={data} />
        </div>
    )
}