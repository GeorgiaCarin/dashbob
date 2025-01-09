
import { RedeAtivaCard } from "../../components/card/card-rede-ativa"
import SimpleBarChart from "../../components/charts/bar-chart"
import { dataRedeAtiva } from "../../assets/data/data-example"
import TableRedeAtiva from "../../components/tables/tb-rede-ativa"
import { SelectValue } from "../../components/select"
import { mes as mesOptions, ano as anoOptions } from "../../assets/data/data-example"
import { ExpandCircleDown } from "@mui/icons-material"
import { getLastDate, getStartDate } from "../../utils/format-date"
import { api_dashboard } from "../../services/api"
import { useEffect, useState } from "react"
import { redeAtivaFaixaData } from "../../utils/format-data"
export const RedeAtiva = () => {
    const [ano, setAno] = useState<number>(new Date().getFullYear())
    const [mes, setMes] = useState<number>(new Date().getMonth())
    const [data,setData] = useState<any>()
    const [redeAtivaFaixadata, setredeAtivaFaixadata] = useState<any>()
    // const [selectedIndice, setSelectedIndice] = useState(dataIndice[0]);

    useEffect(()=> {
        const fetchData = async () => {
          
            const dt_inicio = getStartDate(ano,mes)
            const dt_fim = getLastDate(ano,mes)
          
            try {
                const response = await api_dashboard.get("/analyze-transactional",{
                    params: {dt_inicio: dt_fim, dt_fim}
                })
                setData(response.data.data.analise_transacional)
            

 
            }catch(err){
              console.error("erro ao carregar os dados",err)
            }
        }
        fetchData()
        
    }, [ano,mes])

    useEffect(() => {
      if(data){
        setredeAtivaFaixadata(redeAtivaFaixaData(data))

      }
    
    }, [data])
    

    const handleAnoChange = (selectedAno) => {
        setAno(selectedAno)
    }

    const handleMesChange = (selectedMes) => {
        setMes(selectedMes)
    }
    
  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex gap-2 bg-white shadow-sm p-2 rounded-xl justify-between items-center">
        <div className="title text-center">Rede Ativa</div>
        <div className="flex gap-2 justify-between">
          <SelectValue title='Mês' options={mesOptions} onChange={handleMesChange} />
          <SelectValue title='Ano' options={anoOptions}  onChange={handleAnoChange}/>
        </div>
      </div>
      <div className="flex flex-col gap-2 laptop:flex-row-reverse laptop:gap-4">
        <div className="laptop:flex laptop:flex-col laptop:flex-1 laptop:p-4 p-2 bg-white rounded-xl shadow-sm border-b-2">
          <div className="flex justify-between">
              <div>
                  <div className="font-medium text-lg">Pontos Ativos</div>
                  <div className="title text-secondary-green">1000</div>
              </div>
              <div className="label flex justify-center text-center"><ExpandCircleDown /> 65%</div>
          </div>
          <div className="">
            <SimpleBarChart />
          </div>
        </div>
        <div className="flex flex-col laptop:flex-1 laptop:pb-4 gap-4 laptop:justify-between">
          <TableRedeAtiva data={redeAtivaFaixadata} />
          <div className="laptop:px-[10%] ">
            <RedeAtivaCard />

          </div>

        </div>

      </div>
    </div>
  )
}

