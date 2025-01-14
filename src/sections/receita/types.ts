export type transactions = {
    trns_substabelecido: number,
	faturamento_substabelecido: number,
	trns_loja_propria: number,
	faturamento_loja_propria: number,
	trns_total: number,
	faturamento_total: number
}

export type pix = {
    qtd:number,
    valor: number
}

export type extras_values = {
    valor_negocial: number,
    quantidade_transacoes: number
}

export type extras = {
    negocial: extras_values
    consorcio: extras_values
    recargas: extras_values
    telecena: extras_values
}