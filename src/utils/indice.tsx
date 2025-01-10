export const indiceCalc = (pontosAtivos: Record<string, number>) => {

    const valores = Object.values(pontosAtivos)
    
    const indiceRecente = valores.length - 1

    if (indiceRecente < 2) {
        throw new Error("dados insuficientes, selecione pelo menos 3 meses")

    }

    const valorRecente = valores[indiceRecente]

    const mediaAnteriores = ( valores[indiceRecente - 1 ] + valores[indiceRecente - 1 ])/2

    const razao = valorRecente/mediaAnteriores
    
    return razao.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2})
}