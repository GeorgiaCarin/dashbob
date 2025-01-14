import { LinearProgress, Table } from '@mui/joy'
import Loading from '../loading'

type ativos = {
    faixa: string
    pontos: number
    trn: number
    trnMedia: number
}

type props = {
    data: ativos[]
}

export default function TableRedeAtiva({data}:props) {
    if (!data! || data.length == 0){
        return <Loading />
    }
  return (
    <div className='bg-white py-1 rounded-xl shadow-sm border-b-2'>
        <Table borderAxis={"none"} size='lg' sx={{ 
            '& tr > *:last-child': { textAlign: 'right' },
            '& tr > *:first-of-type': { textAlign: 'left' },
            fontSize: {
                xs: '12px',
                sm:'14px',
                md: '16px',
              }
        }}>
        <thead>
            <tr className='text-md'>
                <th style={{ width: '30%' }}>Faixa</th>
                <th style={{ width: '20%' }}>Pontos</th>
                <th style={{ width: '20%' }}>Trn</th>
                <th>Trn Media</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item) => (
                <tr className='text-sm' key={item.faixa}>
                    <td>
                        {item.faixa}
                    </td>
                    <td>
                        {item.pontos} 
                    </td>
                    <td>
                        {item.trn} 
                    </td>
                    <td>
                        {item.trnMedia} 
                    </td>
                
                </tr>
            ))}
        
        </tbody>
      </Table>
    </div>
  )
}
