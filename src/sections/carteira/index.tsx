import { CustomPieChart } from "../../components/charts/pie-chart"
import { TableCarteira } from "../../components/tables/tb-carteira"
import {carteiraData as data} from "../../assets/data/data-example"

export const Carteira = () => {
    return (
        <div>
            <h1 className="title text-dark-blue text-center">Carteira</h1>
            <CustomPieChart data={data} />
            <TableCarteira data={data} />
            
        </div>
    )
}