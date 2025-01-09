import SimpleBarChart from "../../components/charts/bar-chart"
import { SelectValue } from "../../components/select"
import { TableReceita } from "../../components/tables/tb-receita"
import ExpandCircleDown from "@mui/icons-material/ExpandCircleDown"
import {indices as data} from "../../assets/data/data-receita"
import { formatCurrency } from "../../utils/format-currency"
import { mes as mesOptions } from "../../assets/data/data-receita"
import { useEffect, useState } from "react"
import { getLastDate, getStartDate } from "../../utils/format-date"
import { api_dashboard } from "../../services/api"
const dataIndice = ['Subestabelecido','Loja Própria','Negocial']
const anoOptions = ['2024', '2023', '2022']
export const Receita = () => {
    const [ano, setAno] = useState<number>(new Date().getFullYear())
    const [mes, setMes] = useState<number>(new Date().getMonth() + 1)
    const [data,setData] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedIndice, setSelectedIndice] = useState(dataIndice[0]);

    useEffect(()=> {
        const fetchData = async () => {
            setLoading(true)
            setError(null)
            const dt_inicio = getStartDate(ano,mes)
            const dt_fim = getLastDate(ano,mes)
            try {
                const response = await api_dashboard.get("/expansion-graphic",{
                    params: {dt_inicio,dt_fim}
                })
                setData(response.data)
                setLoading(false)
                // console.log(response.data)
            }catch(err){
                setError("Erro ao carregar dados da API")
                setLoading(false)
            }
        }
        fetchData()
        
    }, [ano,mes])

    const handleAnoChange = (selectedAno) => {
        setAno(selectedAno)
    }

    const handleMesChange = (selectedMes) => {
        setMes(selectedMes)
    }
    
    

    return (
        <div className="w-full  flex flex-col gap-2 rounded-lg laptop:rounded-2xl">
            <div className="flex flex-col tablet:flex-row tablet:justify-between gap-2 bg-white shadow-sm p-2 rounded-xl ">
                <div className="title text-center">receita</div>
                <div className="flex gap-4 justify-between">
                    <SelectValue title='indice' options={dataIndice} onChange={(value) => setSelectedIndice(value)}/>
                    <SelectValue title='Mês' options={mesOptions} onChange={handleMesChange}/>
                    <SelectValue title='Ano' options={anoOptions} onChange={handleAnoChange} />
                </div>
            </div>
            <div className="flex flex-col laptop:flex-row gap-2 laptop:gap-4">
                <div className="laptop:flex laptop:flex-col laptop:flex-1 bg-white p-2 shadow-sm rounded-xl border-b-2">
                    <div className="flex justify-between">
                        <div>
                            <div className="font-medium text-lg">{selectedIndice}</div>
                            {/* <div className="title text-secondary-green">{formatCurrency(data[0].faturamento)}</div> */}
                        </div>
                        <div className="label flex gap-1 h-min justify-center items-center "><ExpandCircleDown /><p>65%</p></div>
                    </div>
                    {/* <SimpleBarChart /> */}
                </div>
                <div className="laptop:flex-1">
                    {/* <TableReceita data={data} /> */}

                </div>

            </div>
        </div>
    )
}