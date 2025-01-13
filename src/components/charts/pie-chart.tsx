import { Box } from '@mui/joy';
import '../../index.css'
import { PieChart } from '@mui/x-charts/PieChart';
import { formatCurrency } from '../../utils/format-currency';
import Loading from '../loading';

type dataset = {
  label: string,
  qtd: number,
  value: number
}

type props = {
  data: dataset[]
}

const color = ['#F55A4D', '#13287E','#8FC043', '#002838']

export const CustomPieChart = ({data}:props) => {
  if (!data || data.length == 0){
    return <Loading />
  }
  return ( 
    <div  className=' flex w-full justify-center'>
      <Box  sx={{
        width: 200
          
      }}>

        <PieChart
          series={

            [
              {
              data: data,
              innerRadius: 80,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: -150,
              endAngle: 225,
              highlightScope: { fade: 'global', highlight: 'item' },
              valueFormatter: (v) => (v.value === null ? '' : formatCurrency(v.value)) 
        
        

            }
          ]}
          colors={color}
          height={250}
          {...pieParams}
          margin={{ right: 0, left: 0 }}
          
          />
      </Box>

    </div>

  )
}

const pieParams = {


  slotProps: { legend: { hidden: true } },

};