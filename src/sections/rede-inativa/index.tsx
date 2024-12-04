
import {SimpleLineChart} from '../../components/charts/line-chart'
import { SelectValue } from '../../components/select'

import { uData, pData, qData } from '../../assets/data/data-example'
import TableRedeInativa from '../../components/tables/tb-rede-inativa'
const data = [
    {
        name: 'Inoperantes',
        pontos: pData,

    },
    {
        name: 'Distratos',
        pontos: uData

    },
    {
        name: 'Em cobrança',
        pontos: qData

    },
]
export default function RedeInativa() {
    const dataIndice = ['Subestabelecido','dfdfhdfhsf']
    return (
        <div className='flex flex-col gap-4 my-4'>

            <div className="flex flex-col gap-2 bg-white justify-between p-2 rounded-xl ">
                <div className="title text-center">Rede inativa</div>
                <div className="flex gap-4 justify-between">
                    <SelectValue title='indice' options={dataIndice} />
                    <SelectValue title='Mês' options={dataIndice} />
                    <SelectValue title='Ano' options={dataIndice} />
                </div>
            </div>

            <SimpleLineChart data={data} />
            <TableRedeInativa data={data} />


        </div>

    )
}
