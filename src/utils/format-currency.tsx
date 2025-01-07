export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}



// const distratoArray = Object.keys(response.data.distrato_por_tipo).map((key) => ({
//     tipo: key,
//     distrato: response.data.distrato_por_tipo[key],
//     total: response.data.total_por_tipo[key]
//   }));
  
//   console.log(distratoArray);


// const mesesArray = Object.keys(response.data.cadastrados).map((mes) => ({
//     mes,
//     cadastrados: response.data.cadastrados[mes],
//     liberados: response.data.liberados[mes],
//     instalados: response.data.instalados[mes]
//   }));
  
//   console.log(mesesArray);