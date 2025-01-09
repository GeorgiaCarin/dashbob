
import { LineChart, markElementClasses, lineElementClasses } from '@mui/x-charts/LineChart';

import { obterMesesIntervalo } from '../../utils/format-graph';
import { transformarDadosParaGrafico } from '../../utils/format-data';
import { LinearProgress } from '@mui/joy';

type Meses = 'janeiro' | 'fevereiro' | 'marco' | 'abril' | 'maio' | 'junho' | 'julho' | 'agosto' | 'setembro' | 'outubro' | 'novembro' | 'dezembro';

interface Dados {
    cadastrados: Record<Meses, number>;
    liberados: Record<Meses, number>;
    instalados: Record<Meses, number>;
  }


type props = {
    data: Dados
    dtInicio: string; 
    dtFim: string; 
}
export const SimpleLineChart = ({data,dtInicio,dtFim}: props) => {
    if (!data || data.length === 0) {
      return <LinearProgress size="sm" sx={{
        color: '#8FC043'    
      }} />;
    }
    const mesesOrdenados = obterMesesIntervalo(dtInicio, dtFim);
    const dadosTransformados = transformarDadosParaGrafico(data, mesesOrdenados);



    return (
        <div className='bg-white shadow-sm p-4 rounded-xl laptop:rounded-xl'>
            <div className='flex justify-around'>
                <div className='flex w-full justify-between text-center' >
                {dadosTransformados.map((item, index) => (
                    <div key={index} className="text-center">
                        <p className="font-medium">{item.name}</p>
                        <p className={`text-xl font-semibold`} style={{ color: item.color }}>
                        {item.pontos[item.pontos.length - 1]}
                        </p>
                    </div>
                    ))}
                </div>

          
            </div>
            <LineChart
        height={250}
        series={dadosTransformados.map((item) => ({
          curve: 'linear',
          data: item.pontos,
          label: item.name,
        }))}
        xAxis={[{ scaleType: 'point', data: mesesOrdenados }]}
        colors={dadosTransformados.map((item) => item.color)}
        sx={{
          [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]: {
            strokeWidth: '3px',
            scale: '0.7',
          },
          [`.${lineElementClasses.root}`]: {
            strokeWidth: '4',
          },
        }}
        margin={{ right: 10, left: 40, top: 50, bottom: 24 }}
        slotProps={{
          legend: {
            direction: 'row',
            itemMarkWidth: 30,
            itemMarkHeight: 16,
            markGap: 2,
            itemGap: 10,
            hidden: true,
          },
        }}
      />
        </div>
    );
}
