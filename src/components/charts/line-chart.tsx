
import { LineChart, markElementClasses, lineElementClasses } from '@mui/x-charts/LineChart';
import { mes } from '../../assets/data/data-receita';


type inativos = {
    name: string
    pontos: number[]
    color: number
}

type props = {
    data: inativos[]
}
export const SimpleLineChart = ({data}: props) => {

    const color = ['#13287E','#8FC043','#c41515']

    return (
        <div className='bg-white shadow-sm p-2 rounded-xl laptop:rounded-xl'>
            <div className='flex justify-around'>
                <div className='text-center ' >
                    <p className='font-medium'>{data[0].name}</p>
                    <p className={` text-dark-blue font-semibold text-xl`}>{data[0].pontos[data[0].pontos.length - 1]}</p>
                </div>
                <div className='text-center ' >
                    <p className='font-medium'>{data[1].name}</p>
                    <p className={` text-primary-green font-semibold text-xl`}>{data[1].pontos[data[1].pontos.length - 1]}</p>
                </div>
                <div className='text-center ' >
                    <p className='font-medium'>{data[2].name}</p>
                    <p className={` text-red font-semibold text-xl`}>{data[2].pontos[data[2].pontos.length - 1]}</p>
                </div>

          
            </div>
            <LineChart
            height={250}

            series={[
            
                { curve: "linear", data: data[0].pontos, label: `${data[0].name}` },
                { curve: "linear", data: data[1].pontos, label: `${data[1].name}` },
                { curve: "linear", data: data[2].pontos, label: `${data[2].name}` },
            ]}
            xAxis={[{ scaleType: 'point', data: mes}]}
            colors={color}
            sx={{
                [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]: {
                    strokeWidth: '3px',
                    scale: '0.7',
                    
                },
                [`.${lineElementClasses.root}`]: {
                    strokeWidth: '4'
                 
                },
                
            }}
            margin={{ right: 10, left: 40, top: 50, bottom: 24}}
            slotProps={{
                legend: {
                    direction: 'row',
                    itemMarkWidth: 30,
                    itemMarkHeight: 16,
                    markGap: 2,
                    itemGap: 10,
                    hidden: true,


                }
            }}
            />
        </div>
    );
}
// const lineParams = {

//     slotProps: { legend: { hidden: true } },
  
//   };
