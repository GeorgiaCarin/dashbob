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

export const carteiraData = (data: any) => [
  { label: 'Liquidados', qtd: data.qtd_liquidados, value: data.valor_liquidados },
  { label: 'A vencer', qtd: data.qtd_a_vencer, value: data.valor_a_vencer },
  { label: 'Vencidos', qtd: data.qtd_vencidos, value: data.valor_vencidos },
  { label: 'Cancelados', qtd: data.qtd_cancelados, value: data.valor_cancelados },
];

export const inadimplenciaData = (data: any) => [
  { label: 'Saldo Devedor Total', value: data.valor_liquidados },
  { label: 'Saldo Devedor Negociado', value: data.valor_a_vencer },
  { label: 'perda', value: data.valor_vencidos },

];