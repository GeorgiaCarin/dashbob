import { CustomPieChart } from "../../components/charts/pie-chart"
import { TableCarteira } from "../../components/tables/tb-carteira"
import {carteiraData as data} from "../../assets/data/data-example"

export const Carteira = () => {
    return (
        <div className="shadow-md py-3 ">
            <h1 className="title text-dark-blue text-center laptop:text-left laptop:p-2">Carteira</h1>
            <div className="laptop:flex items-center">
                <div className="laptop:w-2/6">
                    <CustomPieChart data={data} />

                </div>
                <div className="laptop:w-4/6 laptop:px-2">
                    <TableCarteira data={data} />

                </div>
            
            </div>   
        </div>
    )
}