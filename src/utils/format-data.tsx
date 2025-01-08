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
  { label: 'Saldo Devedor Negociado', value: data.perda },
  { label: 'perda', value: data.negociado },

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