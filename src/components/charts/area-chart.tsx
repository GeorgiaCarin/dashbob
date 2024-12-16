
import { LineChart, lineElementClasses, areaElementClasses } from '@mui/x-charts/LineChart';
import { uData, mes } from '../../assets/data/data-receita';

// const Root = styled('div')(({ theme }) => ({
//   padding: theme.spacing(1),
//   [theme.breakpoints.down('md')]: {
//     backgroundColor: red[500],
//   },
//   [theme.breakpoints.up('md')]: {
//     backgroundColor: blue[500],
//   },
//   [theme.breakpoints.up('lg')]: {
//     backgroundColor: green[500],
//   },
// }));

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
