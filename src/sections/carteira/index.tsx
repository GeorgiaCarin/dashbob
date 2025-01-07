import { CustomPieChart } from "../../components/charts/pie-chart"
import { TableCarteira } from "../../components/tables/tb-carteira"
import {carteiraData as data} from "../../assets/data/data-example"
import { useEffect, useState } from "react"
import { getLastDate } from "../../utils/format-date"
import { api_dashboard } from "../../services/api"
import { carteiraData } from "../../utils/format-data"

export const Carteira = () => {
    const [ano, setAno] = useState<number>(new Date().getFullYear())
    const [mes, setMes] = useState<number>(new Date().getMonth() )
    const [data,setData] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)
            const dt_inicio = getLastDate(ano,mes)
            const dt_fim = getLastDate(ano,mes)
            try {
                const response = await api_dashboard.get("/painting",{
                    params: {dt_inicio,dt_fim}
                })
                setData(response.data)
                setLoading(false)
                console.log('data',response.data)  
            }catch(err){
                setError("Erro ao carregar dados da API")
                setLoading(false)
            }
        }
        fetchData()
        
    }, [ano,mes])

    
    return (
        <div className="shadow-md py-4 laptop:px-4 bg-white flex flex-col gap-4 rounded-xl">
            <h1 className="title text-4xl text-dark-blue text-center laptop:text-left laptop:p-2">Carteira</h1>
            <div className="flex flex-col laptop:flex-row items-center gap-4">
                <div className="">
                    {/* <CustomPieChart data={data} /> */}

                </div>
                <div className="laptop:w-3/6 laptop:px-2">
                    <TableCarteira data={data} />

                </div>
            
            </div>   
        </div>
    )
}