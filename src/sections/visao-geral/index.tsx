// import { styled } from "@mui/material";
import { useEffect, useState } from "react"
import { Line } from "../../components/line"
import { api_dashboard } from "../../services/api"
import { carteiraData, visaoGeralData } from "../../utils/format-data"
import { getLastDate } from "../../utils/format-date"




export const VisaoGeral = () => {
    const currentDate = new Date();
    const [visaodata, setVisaodata] = useState<any[]>([]);
    const [data, setData] = useState<any>();
    const dt_inicio = getLastDate(currentDate.getFullYear(), currentDate.getMonth());
    const dt_fim = dt_inicio; 
    useEffect(() => {
      const fetchData = async () => {
        try{
            const response = await api_dashboard.get("/overview", {
                params: {
                    dt_inicio, dt_fim
                }
            })
            setData(response.data.data)


        } catch (err){
            console.error('sem dados')
        }
      }
    
    fetchData()
    }, [dt_inicio, dt_fim])
    useEffect(() => {
        
        if (data) {
            setVisaodata(visaoGeralData(data));
       
    
        }
    },[data])
    return (
        // <Root>

            <div className="bg-light-green-50 rounded-lg text-center p-4 shadow-sm laptop:h-full laptop:w-full border-b-2" >
                <h1 className="title text-secondary-green">Visão Geral</h1>
                <div className=" flex flex-col gap-2 tablet:gap-4">
                    {visaodata.map((item) => (
                        <div key={item.title}>
                            <Line title={item.title} value={item.value} style={item.style} />
                        </div>
                    ))}
                    
                </div>
            </div>
        // </Root>
    )
}