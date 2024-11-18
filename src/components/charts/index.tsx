
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from '../../assets/data/data-example';

const chartSetting = {

  series: [{ dataKey: 'seoul', valueFormatter }],
  height: 300,
  sx: {
  },
};

export default function TickPlacementBars() {
  return (
    <div className=''>
      
      <BarChart
        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'month' },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
