
import { RedeAtivaCard } from "../../components/card/card-rede-ativa"
import SimpleBarChart from "../../components/charts/bar-chart"
import { dataRedeAtiva } from "../../assets/data/data-example"
import TableRedeAtiva from "../../components/tables/tb-rede-ativa"
import { SelectValue } from "../../components/select"
import { mes, ano } from "../../assets/data/data-example"
import { ExpandCircleDown } from "@mui/icons-material"
export const RedeAtiva = () => {
  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex gap-2 bg-white shadow-sm p-2 rounded-xl justify-between items-center">
        <div className="title text-center">Rede Ativa</div>
        <div className="flex gap-2 justify-between">
          <SelectValue title='Mês' options={mes} />
          <SelectValue title='Ano' options={ano} />
        </div>
      </div>
      <div className="flex flex-col gap-2 laptop:flex-row-reverse laptop:gap-4">
        <div className="laptop:flex laptop:flex-col laptop:flex-1 laptop:p-4 bg-white rounded-xl shadow-sm border-b-2">
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
        <div className="flex flex-col laptop:flex-1  laptop:pb-4 gap-4 laptop:justify-between">
          <TableRedeAtiva data={dataRedeAtiva} />
          <div className="laptop:px-[10%] ">
            <RedeAtivaCard />

          </div>

        </div>

      </div>
    </div>
  )
}

