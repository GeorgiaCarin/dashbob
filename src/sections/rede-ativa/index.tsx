
import { RedeAtivaCard } from "../../components/card/card-rede-ativa"
import TableRedeAtiva from "../../components/tables/tb-rede-ativa"
import { SelectValue } from "../../components/select"
import { ano as anoOptions } from "../../assets/data/data-example"

import { getLastDate, getStartDate, obterMesesAteAtual } from "../../utils/format-date"
import { api_dashboard } from "../../services/api"
import { useEffect, useState } from "react"
import { redeAtivaFaixaData } from "../../utils/format-data"
import { SimpleBarChart } from "../../components/charts/bar-chart"


export const RedeAtiva = () => {
    const [ano, setAno] = useState<number>(new Date().getFullYear())
    const [mes, setMes] = useState<number>(new Date().getMonth())
    const [data,setData] = useState<any>()
    const [pontos, setPontos] = useState<any>()
    const [tarifa, setTarifa] = useState<number>()
    const [totalTrn, setTotalTrn] = useState<number>()
    const mesOptions = obterMesesAteAtual(ano)
    // const handleSum = redeAtivaFaixadata.reduce((sum, item) => sum + item.trn, 0);
    const dt_inicio = getStartDate(ano,mes)
    const dt_fim = getLastDate(ano,mes)
    console.log(mes)
    // console.log(totalTrn); 
    useEffect(()=> {
      const fetchData = async () => {
        const dt_atual = getLastDate(new Date().getFullYear(),new Date().getMonth() )
        try {
              const response = await api_dashboard.get("/analyze-transactional",{
                  params: {dt_inicio: dt_atual, dt_fim: dt_atual}
              })
              const responsePontoa = await api_dashboard.get("/active-points-graphic",{
                params: {dt_inicio, dt_fim}
              })
              const tarifaMedia = await api_dashboard.get("/average-fare",{
                params: {dt_inicio: dt_atual, dt_fim: dt_atual}
              })
              setTarifa(tarifaMedia.data.data.tarifa_media)
              
              setData(redeAtivaFaixaData(response.data.data.analise_transacional))

              setPontos(responsePontoa.data.data)
       
            }catch(err){
              console.error("erro ao carregar os dados",err)
            }
        }
        fetchData()
        
    }, [dt_fim,dt_inicio])
    // useEffect(() => {
    //   if(!data){
    //     setTotalTrn(data.reduce((sum, item) => sum + item.trn, 0))
    //     console.log(totalTrn)
    //   }
    // },[data] )
  

    const handleAnoChange = (selectedAno:string) => {
      // console.log("", selectedAno)
        setAno(Number(selectedAno))
    }

    const handleMesChange = (selectedMes:string) => {
        setMes(Number(selectedMes))
    }
    
  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex gap-2 bg-white shadow-sm p-2 rounded-xl justify-between items-center">
        <div className="title text-center">Rede Ativa</div>
        <div className="flex gap-2 justify-between">
          <SelectValue title='Mês' options={mesOptions} onChange={handleMesChange} />
          <SelectValue title='Ano' options={anoOptions} onChange={handleAnoChange}/>
        </div>
      </div>
      <div className="flex flex-col gap-2 laptop:flex-row-reverse laptop:gap-4">
        <div className="laptop:flex laptop:flex-col laptop:flex-1 laptop:p-4 p-2 bg-white rounded-xl shadow-sm border-b-2">
          
          <div className="">
            <SimpleBarChart data={pontos} dtFim={dt_fim} dtInicio={dt_inicio} />
          </div>
        </div>
        <div className="flex flex-col laptop:flex-1 laptop:pb-4 gap-4 laptop:justify-between">
          <TableRedeAtiva data={data} />
          <div className="laptop:px-[10%] ">
            <RedeAtivaCard tarifa={tarifa} />

          </div>

        </div>

      </div>
    </div>
  )
}

