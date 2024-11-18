import { PieChart } from '@mui/x-charts/PieChart';

const desktopOS = [
    {
      label: 'Windows',
      value: 72.72,
    },
    {
      label: 'OS X',
      value: 16.38,
    },
    {
      label: 'Linux',
      value: 3.83,
    },
    {
      label: 'Chrome OS',
      value: 2.42,
    },
    {
      label: 'Other',
      value: 4.65,
    },
];

export const CustomPieChart = () => {
    return ( 
        <div className='bg-light-green-50'>
            <h1>
                
            </h1>
            <PieChart
                series={[
                    {
                    data: desktopOS,
                    innerRadius: 70,
                    outerRadius: 100,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: -150,
                    endAngle: 225,
                    highlightScope: { fade: 'global', highlight: 'item' },
                  

                   
                    }
                ]}

                width={400}
                height={300}
                
            />
        </div>
    )
}