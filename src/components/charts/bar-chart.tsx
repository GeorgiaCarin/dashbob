import { BarChart } from '@mui/x-charts/BarChart';
import { obterMesesIntervalo } from '../../utils/format-graph';
import { AtivosData } from '../../utils/format-data';
import Loading from '../loading';
import { ExpandCircleDown } from '@mui/icons-material';
import { indiceCalc } from '../../utils/indice';


type Meses = 'janeiro' | 'fevereiro' | 'marco' | 'abril' | 'maio' | 'junho' | 'julho' | 'agosto' | 'setembro' | 'outubro' | 'novembro' | 'dezembro';
interface DadosAtivos {
  pontos_ativos: Record<Meses, number>;
}

type props = {
  data: DadosAtivos;
  dtInicio: string;
  dtFim: string;
};

export const SimpleBarChart = ({ data, dtInicio, dtFim }: props) => {

  if(!data) {
    return <Loading />
  }
  const mesesOrdenados = obterMesesIntervalo(dtInicio, dtFim);
  const pontosAtivos = AtivosData(data, mesesOrdenados);
  console.log(pontosAtivos)
  return (
    <div className="bg-white shadow-sm p-4 rounded-xl laptop:rounded-xl">
      <div className="flex justify-between">
        <div>
          <div className="font-medium text-lg">Pontos Ativos</div>
          <div className="title text-secondary-green">{}</div>
        </div>
        <div className="label flex justify-center text-center"><ExpandCircleDown /> {indiceCalc(pontosAtivos)}%</div>
      </div>
      <BarChart
        height={250}
        series={[{ data: pontosAtivos }]}
        xAxis={[{ scaleType: 'band', data: mesesOrdenados }]}
        colors={['#8FC043']}
        margin={{ right: 10, left: 40, top: 24, bottom: 24 }}
      />
    </div>
  );
};
