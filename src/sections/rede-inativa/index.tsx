
//import {SimpleLineChart} from '../../components/charts/line-chart-expansao '
import { SelectValue } from '../../components/select'

// const color = ['#13287E','#8FC043', '#F55A4D']

import { redeInativaData } from '../../assets/data/data-example'
import { TableRedeInativa } from '../../components/tables/tb-rede-inativa'
import { useEffect, useState } from 'react'
import { api_dashboard } from '../../services/api'
import { getLastDate, getStartDate, obterMesesAteAtual } from '../../utils/format-date'
import { tiposDistratos } from '../../utils/format-data'

type TipoDistrato = {
    tipo: string;
    distratos: number;
    total: number;
  };
  
  type DistratoPorTipo = {
    [key: string]: number; 
  };
  
  
  type DataDistrato = {
    distrato_por_tipo: DistratoPorTipo;
    total_por_tipo: DistratoPorTipo;
  };
export default function RedeInativa() {
    const [ano, setAno] = useState<number>(new Date().getFullYear())
    const [mes, setMes] = useState<number>(new Date().getMonth())
    const [data,setData] = useState<TipoDistrato[]>()
    
    const dt_atual = getLastDate(new Date().getFullYear(),new Date().getMonth() )
    // const dt_inicio = getStartDate(ano,mes)
    // const dt_fim = getLastDate(ano,mes)
    const mesOptions = obterMesesAteAtual(ano)
    const anoOptions = ["2023", "2024", "2025"]
    
    useEffect(()=> {
      const fetchData = async () => {

        try {
              const response = await api_dashboard.get("/cancellation",{
                  params: {dt_inicio: dt_atual, dt_fim: dt_atual}
              })
              setData(tiposDistratos(response.data.data))

            }catch(err){
              console.error("erro ao carregar os dados",err)
            }
        }
        fetchData()
        
    }, [dt_atual])

    return (
        <div className='flex flex-col gap-4 py-4 '>

            <div className="flex flex-col gap-2 bg-white justify-between p-2 rounded-xl shadow-sm ">
                <div className="flex gap-4 justify-between items-center ">
                    <div className="title text-center ">Rede inativa</div>
                    <div className='flex gap-2 laptop:gap-4'>
                        <SelectValue title='Mês' options={mesOptions} />
                        <SelectValue title='Ano' options={anoOptions} />
                    </div>
                </div>
            </div>
            <div className='laptop:flex flex flex-col laptop:flex-row gap-2'>
                <div className='laptop:w-1/2 bg-white rounded-xl border-b-2'>
                    {/* <SimpleLineChart data={data} /> */}
                </div>
                <div className='laptop:w-1/2 h-[100%] border-b-2'>
                    <TableRedeInativa data={data} />

                </div>
            </div>
  


        </div>

    )
}
