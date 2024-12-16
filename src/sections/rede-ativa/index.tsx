
import { RedeAtivaCard } from "../../components/card/card-rede-ativa"
import SimpleBarChart from "../../components/charts/bar-chart"
import { dataRedeAtiva } from "../../assets/data/data-example"
import TableRedeAtiva from "../../components/tables/tb-rede-ativa"
import { SelectValue } from "../../components/select"
import { mes, ano } from "../../assets/data/data-example"
import { ExpandCircleDown } from "@mui/icons-material"
export const RedeAtiva = () => {
  return (
    <div className="flex flex-col gap-4 rounded-md shadow-md py-4">
      <div className="flex gap-2 bg-white shadow-sm p-2 rounded-xl justify-between items-center">
        <div className="title text-center">Rede Ativa</div>
        <div className="flex gap-2 justify-between">
          <SelectValue title='Mês' options={mes} />
          <SelectValue title='Ano' options={ano} />
        </div>
      </div>
      <div className="laptop:flex laptop:flex-row-reverse laptop:gap-4">
        <div className="laptop:flex laptop:flex-col laptop:flex-1 ">
          <div className="flex justify-between">
              <div>
                  <div className="font-medium text-lg">Pontos Ativos</div>
                  <div className="title text-secondary-green">000</div>
              </div>
              <div className="label flex justify-center text-center"><ExpandCircleDown /> 65%</div>
          </div>
          <SimpleBarChart />

        </div>
        <div className="laptop:flex laptop:flex-col laptop:flex-1  laptop:px-4 laptop:pb-4 gap-4">
          <TableRedeAtiva data={dataRedeAtiva} />
          <div className="laptop:px-32">
            <RedeAtivaCard />

          </div>

        </div>

      </div>
    </div>
  )
}

