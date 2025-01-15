import SimpleBarChart from "../../components/charts/bar-chart"
import { SelectValue } from "../../components/select"
import { TableReceita } from "../../components/tables/tb-receita"
import { useEffect, useState } from "react"
import { getLastDate, getStartDate, obterMesesAteAtual } from "../../utils/format-date"
import { api_dashboard } from "../../services/api"
import './types'
import { SelectMes } from "../../components/select/select-mes"
const dataIndice = ['Subestabelecido','Loja Própria','Negocial']
export const Receita = () => {
    const [ano, setAno] = useState<number>(new Date().getFullYear())
    const [mes, setMes] = useState<number>(new Date().getMonth() + 1)
    const [data,setData] = useState<any[]>([])

    const mesOptions = obterMesesAteAtual(ano)
    const anoOptions = [2025, 2024, 2023, 2022]
    useEffect(()=> {
        const fetchData = async () => {
            const dt_inicio = getStartDate(ano,mes)
            const dt_fim = getLastDate(ano,mes)
            try {
                const response = await api_dashboard.get("/expansion-graphic",{
                    params: {dt_inicio,dt_fim}
                })
                setData(response.data)

                // console.log(response.data)
            }catch(err){
                console.error("Erro ao carregar dados da API")

            }
        }
        fetchData()
        
    }, [ano,mes])

    const handleAnoChange = (selectedAno:number) => {
        setAno(selectedAno)
    }

    const handleMesChange = (selectedMes:number) => {
        setMes(selectedMes)
    }


    return (
        <div className="w-full  flex flex-col gap-2 rounded-lg laptop:rounded-2xl">
            <div className="flex flex-col tablet:flex-row tablet:justify-between gap-2 bg-white shadow-sm p-2 rounded-xl ">
                <div className="title text-center">receita</div>
                <div className="flex gap-4 justify-between">
                    {/* <SelectValue title='indice' options={dataIndice} onChange={(value) => setSelectedIndice(value)}/> */}
                    <SelectMes title='Mês' options={mesOptions} onChange={handleMesChange}/>
                    <SelectValue title='Ano' options={anoOptions} onChange={handleAnoChange} />
                </div>
            </div>
            <div className="flex flex-col laptop:flex-row gap-2 laptop:gap-4">
                <div className="laptop:flex laptop:flex-col laptop:flex-1 bg-white p-2 shadow-sm rounded-xl border-b-2">
                    <div className="flex justify-between">
                       
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