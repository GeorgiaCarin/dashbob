
import { BarChart } from '@mui/x-charts/BarChart';
import { uData, mes } from '../../assets/data/data-receita';



export default function SimpleBarChart() {

  return (
    <BarChart
    
      height={240}
      series={[
      
        { data: uData, id: 'uvId' },
      ]}
      xAxis={[
        { 
        data: mes, 
        scaleType: 'band',
        
        }]}
        
        margin={{ right: 10, left: 40, top: 10, bottom: 24
       }}
      colors={['#8FC043']}
      
    />

  );
}
