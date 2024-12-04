import React from 'react'
import { SelectValue } from '../../components/select'
import { SimpleLineChart } from '../../components/charts/line-chart'
import TableSimples from '../../components/tables/tb-simples'
import { pData, qData, uData } from '../../assets/data/data-example'
const data = [
    {
        name: 'Cadastrados',
        pontos: pData,

    },
    {
        name: 'Liberados',
        pontos: uData

    },
    {
        name: 'Instalados',
        pontos: qData

    },
]
export default function Expansao() {
    const dataIndice = ['Subestabelecido','dfdfhdfhsf']
    return (
        <div className='flex flex-col gap-4 my-4'>

            <div className="flex flex-col gap-2 bg-white justify-between p-2 rounded-xl ">
                <div className="title text-center">Expansão</div>
                <div className="flex gap-4 justify-between">
                    <SelectValue title='indice' options={dataIndice} />
                    <SelectValue title='Mês' options={dataIndice} />
                    <SelectValue title='Ano' options={dataIndice} />
                </div>
            </div>

            <SimpleLineChart data={data} />
            <TableSimples data={data} />


        </div>

    )
}
