
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const qData = [1398, 2400, 3908, 9800, 3800, 4800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export const SimpleLineChart = () => {
    const color = ['#13287E','#8FC043', '#002838']
    return (
        <LineChart
        height={300}
        series={[
            { data: pData, label: 'pv' },
            { data: uData, label: 'uv' },
            { data: qData, label: 'qv' },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        colors={color}
        {...lineParams}
        margin={{ right: 10, left: 40, top: 10, bottom: 24}}
        />
    );
}
const lineParams = {


    slotProps: { legend: { hidden: true } },
  
  };
