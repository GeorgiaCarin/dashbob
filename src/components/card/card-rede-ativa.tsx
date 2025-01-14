import { formatCurrency } from "../../utils/format-currency"

type props = {
    tarifa?: number,
    totalTrn: number
}
export const RedeAtivaCard = ({tarifa,totalTrn}:props) => {

    return (
        <div className="flex bg-light-green-50 justify-around rounded-full shadow-sm p-2 mx-4 border-b-2 ">
            <div className="text-center">
                <p className="title-secondary text-primary-green">{totalTrn}</p>
                <p>Trn Média</p>
            </div>
            <div className="text-center">
                <p className="title-secondary text-primary-green">{formatCurrency(tarifa)}</p>
                <p>Tarifa Média</p>
            </div>
            
        </div>
    )
}