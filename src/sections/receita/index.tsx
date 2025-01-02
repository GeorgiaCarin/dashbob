import SimpleBarChart from "../../components/charts/bar-chart"
import { SelectValue } from "../../components/select"
import { TableReceita } from "../../components/tables/tb-receita"
import ExpandCircleDown from "@mui/icons-material/ExpandCircleDown"
import {indices as data} from "../../assets/data/data-receita"
import { formatCurrency } from "../../utils/format-currency"
import { mes } from "../../assets/data/data-receita"
import { useEffect, useState } from "react"
import { getLastDate } from "../../utils/format-date"
const dataIndice = ['Subestabelecido','Loja Própria','Negocial']
const ano = ['2024', '2023', '2022']
export const Receita = () => {
    const [selectedIndice, setSelectedIndice] = useState(dataIndice[0]);
    const [selectedMonth, setSelectedMonth] = useState(mes[0]);
    const currentYear = new Date().getFullYear()
    const currentMonth = mes.indexOf(selectedMonth)
    
    useEffect(() => {
        
        console.log("mouth", getLastDate(currentYear,currentMonth))
    
    }, [currentMonth,currentYear])
    

    return (
        <div className="w-full  flex flex-col gap-2 rounded-lg laptop:rounded-2xl">
            <div className="flex flex-col tablet:flex-row tablet:justify-between gap-2 bg-white shadow-sm p-2 rounded-xl ">
                <div className="title text-center">receita</div>
                <div className="flex gap-4 justify-between">
                    <SelectValue title='indice' options={dataIndice} onChange={(value) => setSelectedIndice(value)}/>
                    <SelectValue title='Mês' options={mes} onChange={(value) => setSelectedMonth(value)}/>
                    <SelectValue title='Ano' options={ano} />
                </div>
            </div>
            <div className="flex flex-col laptop:flex-row gap-2 laptop:gap-4">
                <div className="laptop:flex laptop:flex-col laptop:flex-1 bg-white p-2 shadow-sm rounded-xl border-b-2">
                    <div className="flex justify-between">
                        <div>
                            <div className="font-medium text-lg">{selectedIndice}</div>
                            <div className="title text-secondary-green">{formatCurrency(data[0].faturamento)}</div>
                        </div>
                        <div className="label flex gap-1 h-min justify-center items-center "><ExpandCircleDown /><p>65%</p></div>
                    </div>
                    <SimpleBarChart />
                </div>
                <div className="laptop:flex-1">
                    <TableReceita data={data} />

                </div>

            </div>
        </div>
    )
}