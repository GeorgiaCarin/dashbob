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
  { label: 'Total', qtd: data.qtd_total, value: data.valor_total },
  { label: 'Média', qtd: data.qtd_media, value: data.valor_media }
];