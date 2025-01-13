import { Table } from '@mui/joy'
import Loading from '../loading'


type inativos = {
    name: string
    pontos: number[]
}

type props = {
    data: inativos[]
}

export default function TableSimples({data}:props) {
    if (!data || data.length == 0){
        return <Loading />
      }
    return (
    <div className='bg-white shadow-md rounded-md'>
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
            <tr>
                <th style={{ }}>Mês Atual</th>
                <th>Pontos</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item) => (
                <tr key={item.name}>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.pontos[item.pontos.length - 1]} 
                    </td>
                
                </tr>
            ))}
        
        </tbody>
      </Table>
    </div>
  )
}
