
import { LineChart, markElementClasses } from '@mui/x-charts/LineChart';
import { mes } from '../../assets/data/data-receita';


type inativos = {
    name: string
    pontos: number[]
}

type props = {
    data: inativos[]
}
export const SimpleLineChart = ({data}: props) => {
    const color = ['#13287E','#8FC043', '#002838']
    return (
        <div className='bg-white shadow-sm p-2 rounded-sm'>
            <div className='flex justify-around'>
                {data.map((item) => (
                <div key={item.name} className='text-center ' >
                    <p>{item.name}</p>
                    <p className='text-blue'>{item.pontos[item.pontos.length - 1]}</p>
                </div>
                ))}
          
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
                    stroke: '1',
                    scale: '0.6'
                },
                
            }}
            margin={{ right: 10, left: 40, top: 50, bottom: 24}}
            slotProps={{
                legend: {
                    direction: 'row',
                    itemMarkWidth: 20,
                    itemMarkHeight: 16,
                    markGap: 2,
                    itemGap: 10,
                    hidden: true

                }
            }}
            />
        </div>
    );
}
// const lineParams = {

//     slotProps: { legend: { hidden: true } },
  
//   };
