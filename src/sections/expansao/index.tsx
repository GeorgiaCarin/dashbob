
import { SelectValue } from '../../components/select'
import { SimpleLineChart } from '../../components/charts/line-chart'
import { pData, qData, uData } from '../../assets/data/data-example'
import {ano, mes} from "../../assets/data/data-example"
const data = [
    {
        name: 'Cadastrados',
        pontos: pData,
        color: 0,
    },
    {
        name: 'Liberados',
        pontos: uData,
        color: 1,
    },
    {
        name: 'Instalados',
        pontos: qData,
        color: 2,

    },
]
export default function Expansao() {

    return (
        <div className='flex flex-col gap-4 my-4 laptop:my-0 laptop:rounded-lg'>

            <div className="flex flex-col gap-2 bg-white justify-between p-2 rounded-2xl">
                <div className="flex gap-4 justify-between">
                    <div className="title text-center">Expansão</div>
                    <div className='flex gap-4 '>
                        <SelectValue title='Mês' options={mes} />
                        <SelectValue title='Ano' options={ano} />

                    </div>
                </div>
            </div>
            <div className='border-b-2'>
            <SimpleLineChart data={data} />
            {/* <TableSimples data={data} /> */}

            </div>


        </div>

    )
}
