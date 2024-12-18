import { Table } from '@mui/joy'

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
  return (
    <div className='bg-white py-1 rounded-xl shadow-sm border-b-2'>
        <Table borderAxis={"none"} size='lg' sx={{ 
            '& tr > *:last-child': { textAlign: 'right' },
            '& tr > *:first-child': { textAlign: 'left' },
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
