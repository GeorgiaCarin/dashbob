import { CustomPieChart } from "../../components/charts/pie-chart"
import { TableCarteira } from "../../components/tables/tb-carteira"
import {carteiraData as data} from "../../assets/data/data-example"

export const Carteira = () => {
    return (
        <div className="shadow-md py-6 bg-white flex flex-col gap-4 rounded-xl">
            <h1 className="title text-4xl text-dark-blue text-center laptop:text-left laptop:p-2">Carteira</h1>
            <div className="flex flex-col items-center gap-4">
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