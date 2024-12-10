
import { LineChart, lineElementClasses, areaElementClasses } from '@mui/x-charts/LineChart';
import { uData, mes } from '../../assets/data/data-receita';

export default function AreaChart() {
  return (
    <div className='w-full'>

    <LineChart

        height={300}
        series={[{ data: uData, area: true, showMark: false }]}
        xAxis={[{ scaleType: 'point', data: mes }]}
        yAxis={[{scaleType: 'linear'}]}
        sx={{
            [`& .${lineElementClasses.root}`]: {
                display: '2',
            },
            [`& .${areaElementClasses.root}`]: {
                
            },
           
        }}
        colors={['#8FC043']}
        />
    </div>
  );
}
