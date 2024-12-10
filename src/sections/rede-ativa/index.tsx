
import { RedeAtivaCard } from "../../components/card/card-rede-ativa"
import SimpleBarChart from "../../components/charts/bar-chart"
import { dataRedeAtiva } from "../../assets/data/data-example"
import TableRedeAtiva from "../../components/tables/tb-rede-ativa"
import { SelectValue } from "../../components/select"
import { mes, ano } from "../../assets/data/data-example"
export const RedeAtiva = () => {
  return (
    <div className="flex flex-col gap-4 rounded-md shadow-md py-4">
      <div className="flex gap-2 bg-white shadow-sm p-2 rounded-xl justify-between ">
        <div className="title text-center">Rede Ativa</div>
        <div className="flex gap-4 justify-between">
          <SelectValue title='Mês' options={mes} />
          <SelectValue title='Ano' options={ano} />
        </div>
      </div>
      <SimpleBarChart />
      <TableRedeAtiva data={dataRedeAtiva} />
      <RedeAtivaCard />
    </div>
  )
}

