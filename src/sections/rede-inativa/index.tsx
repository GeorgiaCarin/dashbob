
import {SimpleLineChart} from '../../components/charts/line-chart'
import { SelectValue } from '../../components/select'

import { uData, pData, qData } from '../../assets/data/data-example'
// const color = ['#13287E','#8FC043', '#F55A4D']
import { mes, ano } from '../../assets/data/data-example'
const data = [
    {
        name: 'Inoperantes',
        pontos: pData,
        color: 0,

    },
    {
        name: 'Distratos',
        pontos: uData,
        color: 1,

    },
    {
        name: 'Em cobrança',
        pontos: qData,
        color: 2,

    },
]
export default function RedeInativa() {

    return (
        <div className='flex flex-col gap-4 my-4'>

            <div className="flex flex-col gap-2 bg-white justify-between p-2 rounded-xl ">
                <div className="flex gap-4 justify-between">
                    <div className="title text-center">Rede inativa</div>
                    <SelectValue title='Mês' options={mes} />
                    <SelectValue title='Ano' options={ano} />
                </div>
            </div>

            <SimpleLineChart data={data} />
  


        </div>

    )
}
