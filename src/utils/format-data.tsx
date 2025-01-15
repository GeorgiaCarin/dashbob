// interface Resultado {
//     mes: string;
//     cadastrados: number;
//     liberados: number;
//     instalados: number;
//   }
  
//   export const transformarDados = (data): Resultado[] => {
//     return Object.keys(data.cadastrados).map((mes) => ({
//       mes,
//       cadastrados: data.cadastrados[mes],
//       liberados: data.liberados[mes],
//       instalados: data.instalados[mes]
//     }));
//   };

export const carteiraData = (data: any) => {
  return [
    { label: "Liquidados", qtd: data.qtd_liquidados, value: data.valor_liquidados },
    { label: "A vencer", qtd: data.qtd_a_vencer, value: data.valor_a_vencer },
    { label: "Vencidos", qtd: data.qtd_vencidos, value: data.valor_vencidos },
    { label: "Cancelados", qtd: data.qtd_cancelados, value: data.valor_cancelados }
  ];
}
export const inadimplenciaData = (data: any) => [
  { label: 'Saldo Devedor Total', value: data.saldo_devedor },
  { label: 'Perda', value: data.perda },
  { label: 'Saldo Devedor Negociado', value: data.negociado },

];

export const visaoGeralData = (data: any) => [
  { title: 'Ativos', value: data.ativos, style: '' },
  { title: 'Liberados', value: data.liberados, style: '' },
  { title: 'Subtotal', value: data.subtotal, style: 'bg-light-green-200' },
  { title: 'CENOP', value: data.cenop, style: '' },
  { title: 'Inoperantes', value: data.inoperantes, style: '' },
  { title: 'Em prospecção', value: data.em_prospeccao, style: '' },
  { title: 'Total', value: data.total, style: 'bg-light-green-200' },
];



export const redeAtivaFaixaData = (data: any) => [
  { faixa: 'Até 100', pontos: data.ate_100.pontos, trn: data.ate_100.transacoes, trnMedia: data.ate_100.media_transacoes },
  { faixa: '101 a 750', pontos: data['101_a_750'].pontos, trn: data['101_a_750'].transacoes, trnMedia: data['101_a_750'].media_transacoes },
  { faixa: '751 a 3000', pontos: data['751_a_3000'].pontos, trn: data['751_a_3000'].transacoes, trnMedia: data['751_a_3000'].media_transacoes },
  { faixa: '3001 a 5000', pontos: data['3001_a_5000'].pontos, trn: data['3001_a_5000'].transacoes, trnMedia: data['3001_a_5000'].media_transacoes },
  { faixa: 'Acima de 5000', pontos: data.acima_de_5000.pontos, trn: data.acima_de_5000.transacoes, trnMedia: data.acima_de_5000.media_transacoes },
];

//------------------------------------------------



type Meses = 'janeiro' | 'fevereiro' | 'marco' | 'abril' | 'maio' | 'junho' | 'julho' | 'agosto' | 'setembro' | 'outubro' | 'novembro' | 'dezembro';

interface DadosExpansao {
  cadastrados: Record<Meses, number>;
  liberados: Record<Meses, number>;
  instalados: Record<Meses, number>;
}

export const transformarDadosParaGrafico = (data: DadosExpansao, mesesOrdenados: string[]) => {
  const nomes = ['Cadastrados', 'Liberados', 'Instalados'];
  const cores = ['#13287E', '#8FC043', '#c41515'];

  const datasets = ['cadastrados', 'liberados', 'instalados'] as const;

  return datasets.map((key, index) => ({
    name: nomes[index],
    value: mesesOrdenados.map((mes) => data[key][mes as Meses]),
    color: cores[index],
  }));
};
//----------------------------------------------------

interface DadosAtivos {
  faturamento_pontos_ativos: Record<Meses, number>;
}

export const AtivosData = (data: DadosAtivos, mesesOrdenados: string[]): number[] => {
  return mesesOrdenados.map((mes) => data.faturamento_pontos_ativos[mes as Meses]);
};

//------------------------------------------- tipos de distrato
interface DadosInativa {
  inoperante: Record<Meses, number>;
  distrato: Record<Meses, number>;
  cobranca: Record<Meses, number>;
}

export const dadosRedeInativaGrafico = (data: DadosInativa, mesesOrdenados: string[]) => {
  if (!data) {
    console.error("Os dados estão indefinidos.");
    return [];
  }

  const nomes = ['Inoperante', 'Distrato', 'Cobranca'];
  const cores = ['#13287E', '#8FC043', '#c41515'];
  const datasets = ['inoperante', 'distrato', 'cobranca'] as const;

  return datasets.map((key, index) => {
    if (!data[key]) {
      console.warn(`Chave ${key} não encontrada em data.`);
      return {
        name: nomes[index],
        value: mesesOrdenados.map(() => 0), // Retorna 0 se a chave não existir
        color: cores[index],
      };
    }

    return {
      name: nomes[index],
      value: mesesOrdenados.map((mes) => {
        const valor = data[key][mes as Meses] ?? 0;
        return valor < 0 ? 0 : valor;
      }),
      color: cores[index],
    };
  });
};


//----------------------------------------------------

type TipoDistrato = {
  tipo: string;
  distratos: number;
  total: number;
};

type DistratoPorTipo = {
  [key: string]: number; 
};


type DataDistrato = {
  distrato_por_tipo: DistratoPorTipo;
  total_por_tipo: DistratoPorTipo;
};

export const tiposDistratos = (data: DataDistrato): TipoDistrato[] => {
  const distratoPorTipo = data.distrato_por_tipo;
  const totalPorTipo = data.total_por_tipo;

  const chaves = Object.keys(distratoPorTipo);

  return chaves.map((tipo) => ({
    tipo,
    distratos: distratoPorTipo[tipo],
    total: totalPorTipo[tipo],
  }));
};

//-----------------------------------------------------------
