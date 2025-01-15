
import { SelectValue } from '../../components/select'
import { SimpleLineChart } from '../../components/charts/line-chart-expansao'
import { useEffect, useState } from 'react'
import { getLastDate, getStartDate, obterMesesAteAtual } from '../../utils/format-date'
import { api_dashboard } from '../../services/api'
import { SelectMes } from '../../components/select/select-mes'


type Meses = 'janeiro' | 'fevereiro' | 'marco' | 'abril' | 'maio' | 'junho' | 'julho' | 'agosto' | 'setembro' | 'outubro' | 'novembro' | 'dezembro';

interface Dados {
  cadastrados: Record<Meses, number>;
  liberados: Record<Meses, number>;
  instalados: Record<Meses, number>;
}

export default function Expansao() {
    const [ano, setAno] = useState<number>(new Date().getFullYear())
    const [mes, setMes] = useState<number>(new Date().getMonth() )
    const [data,setData] = useState<Dados>()
    const dt_inicio = getStartDate(ano,mes)
    const dt_fim = getLastDate(ano,mes)
    const mesOptions = obterMesesAteAtual(ano)
    const anoOptions = [2025, 2024, 2023, 2022]

    useEffect(()=> {
        const fetchData = async () => {

            try {
                const response = await api_dashboard.get("/expansion-graphic",{
                    params: {dt_inicio: dt_inicio,dt_fim: dt_fim}
                })
                await setData(response.data.data)
       
              
            }catch(err){
                console.error("erro",err)

            }
        }
        fetchData()
        
    }, [dt_inicio,dt_fim])
    const handleAnoChange = (selectedAno:number) => {
        setAno(selectedAno)
    }

    const handleMesChange = (selectedMes:number) => {
        setMes(selectedMes)
    }
  
    return (
        <div className='flex flex-col gap-4 my-4 laptop:my-0 laptop:rounded-lg'>

            <div className="flex flex-col gap-2 bg-white justify-between p-2 rounded-2xl">
                <div className="flex gap-4 justify-between">
                    <div className="title text-center">Expansão</div>
                    <div className='flex gap-4 '>
                        <SelectMes title='Mês' options={mesOptions} onChange={handleMesChange} />
                        <SelectValue title='Ano' options={anoOptions} onChange={handleAnoChange}/>

                    </div>
                </div>
            </div>
            <div className='border-b-2'>
            <SimpleLineChart data={data} mesInicial='Jan' dtFim={dt_fim} dtInicio={dt_inicio} />


            </div>


        </div>

    )
}
