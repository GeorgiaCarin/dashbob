
import { BarChart } from '@mui/x-charts/BarChart';
import { uData, mes } from '../../assets/data/data-receita';



export default function SimpleBarChart() {

  return (
    <BarChart
      sx={{
        minHeight: "240px",
        maxHeight: "300px",
        
      }}
      height={250}
      slotProps={{
        bar: {
          style: {
            borderRadius: '10px 10px 0 0',
          },
        },
      }}
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
