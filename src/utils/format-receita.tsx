import { object } from "yup";
import { qData } from "../assets/data/data-example";

export const tbReceitaData =() => {
    const categorias = response1.data;
    const total = response2.data;
    const adicionais = response3.data;
    
    const dadosCombinados = {
        ...Object.fromEntries(
            Object.entries(categorias).map(([key, value]: [string,any]) => [
                key,
                {
                    qtd: value.quantidade_transacoes || 0,
                    value: value[`valor_${key}`] || 0
                }
            ])
        )
    }
}