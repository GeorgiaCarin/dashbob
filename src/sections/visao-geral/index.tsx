// import { styled } from "@mui/material";
import { Line } from "../../components/line"
// import { blue, green, red } from "@mui/material/colors";
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
// const Root = styled('div')(({ theme }) => ({
//     padding: theme.spacing(1),
//     [theme.breakpoints.down('md')]: {
//       backgroundColor: red[500],
//     },
//     [theme.breakpoints.up('md')]: {
//       backgroundColor: blue[500],
//     },
//     [theme.breakpoints.up('lg')]: {
//       backgroundColor: green[500],
//     },
//   }));
export const VisaoGeral = () => {
    return (
        // <Root>

            <div className="bg-light-green-50 rounded-lg text-center p-4 shadow-md laptop:h-full laptop:w-full" >
                <h1 className="title text-secondary-green">Visão Geral</h1>
                <div className=" flex flex-col gap-2 tablet:gap-4">
                    {data.map((item) => (
                        <div key={item.title}>
                            <Line title={item.title} value={item.value} style={item.style} />
                        </div>
                    ))}
                    
                </div>
            </div>
        // </Root>
    )
}