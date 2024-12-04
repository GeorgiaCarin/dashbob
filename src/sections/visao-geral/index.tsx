import { Line } from "../../components/line"
type dataProps = {
    title: string,
    value: number,
    style: string
}
const data: dataProps[] = [
    {
        title: 'Ativos',
        value: 4577,
        style: ''
    },
    {
        title: 'Liberados',
        value: 1,
        style: ''
    },
    {
        title: 'Subtotal',
        value: 4578,
        style: 'bg-light-green-200'
    },
    {
        title: 'CENOP',
        value: 25,
        style: ''
    },
    {
        title: 'Inoperantes',
        value: 2,
        style: ''
    },
    {
        title: 'Em prospecção',
        value: 0,
        style: ''
    },
    {
        title: 'Total',
        value: 4649,
        style: 'bg-light-green-200'
    },
]

export const VisaoGeral = () => {
    return (
        <div className="bg-light-green-50 rounded-lg text-center p-4 shadow-md" >
            <h1 className="title text-secondary-green">Visão Geral</h1>
            <div className=" flex flex-col gap-2">
                {data.map((item) => (
                    <Line title={item.title} value={item.value} style={item.style} />
                ))}
                
            </div>
        </div>
    )
}