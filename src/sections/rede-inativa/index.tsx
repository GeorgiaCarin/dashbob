
//import {SimpleLineChart} from '../../components/charts/line-chart-expansao '
import { SelectValue } from '../../components/select'

import { TableRedeInativa } from '../../components/tables/tb-rede-inativa'
import { useEffect, useState } from 'react'
import { api_dashboard } from '../../services/api'
import { getLastDate, getStartDate, obterMesesAteAtual } from '../../utils/format-date'
import { tiposDistratos } from '../../utils/format-data'
import { SimpleLineChart } from '../../components/charts/line-chart'
import { SelectMes } from '../../components/select/select-mes'

type Meses = 'janeiro' | 'fevereiro' | 'marco' | 'abril' | 'maio' | 'junho' | 'julho' | 'agosto' | 'setembro' | 'outubro' | 'novembro' | 'dezembro';

interface DadosInativa {
    inoperante: Record<Meses, number>;
    distrato: Record<Meses, number>;
    cobranca: Record<Meses, number>;
}

type TipoDistrato = {
    tipo: string;
    distratos: number;
    total: number;
  };
  
export default function RedeInativa() {
    const [ano, setAno] = useState<number>(new Date().getFullYear())
    const [mes, setMes] = useState<number>(new Date().getMonth())
    const [data,setData] = useState<TipoDistrato[]>([])
    const [dataGrafico, setDataGrafico] = useState<DadosInativa[]>([])
    const dt_atual = getLastDate(new Date().getFullYear(),new Date().getMonth() )
    const dt_inicio = getStartDate(ano,mes)
    const dt_fim = getLastDate(ano,mes)
    const mesOptions = obterMesesAteAtual(ano)
    const anoOptions = ["2025", "2024", "2023"]

    useEffect(()=> {
      const fetchData = async () => {
        try {
              const response = await api_dashboard.get("/cancellation",{
                  params: {dt_inicio: dt_atual, dt_fim: dt_atual}
              })
              const responseGrafico = await api_dashboard.get("/inactive-graphic",{
                params: {dt_inicio, dt_fim}
            })
                setData(tiposDistratos(response.data.data))
                setDataGrafico((responseGrafico.data.data))
            }catch(err){
              console.error("erro ao carregar os dados",err)
            }
        }
        fetchData()
        
    }, [dt_inicio,dt_fim,dt_atual])

    const handleAnoChange = (selectedAno:number) => {
        setAno(selectedAno)
    }

    const handleMesChange = (selectedMes:number) => {
        setMes(selectedMes)
    }
    return (
        <div className='flex flex-col gap-4 py-4 '>

            <div className="flex flex-col gap-2 bg-white justify-between p-2 rounded-xl shadow-sm ">
                <div className="flex gap-4 justify-between items-center ">
                    <div className="title text-center ">Rede inativa</div>
                    <div className='flex gap-2 laptop:gap-4'>
                        <SelectMes title='Mês' options={mesOptions} onChange={handleMesChange}/>
                        <SelectValue title='Ano' options={anoOptions} onChange={handleAnoChange}/>
                    </div>
                </div>
            </div>
            <div className='laptop:flex flex flex-col laptop:flex-row gap-2'>
                <div className='laptop:w-1/2 bg-white rounded-xl border-b-2'>
                    <SimpleLineChart data={dataGrafico} dtFim={dt_fim} dtInicio={dt_inicio} />
                </div>
                <div className='laptop:w-1/2 h-[100%] border-b-2'>
                    <TableRedeInativa data={data} />

                </div>
            </div>
  


        </div>

    )
}
