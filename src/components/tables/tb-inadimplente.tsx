import { Table } from '@mui/joy'
import { formatCurrency } from '../../utils/format-currency'
import Loading from '../loading'


type data = {
    label: string
    value: number
}

type props = {
    data: data[]
}

export default function TableInadimplente({data}:props) {
    if (!data || data.length == 0){
        return <Loading />
      }
    return (
    <div className='bg-white rounded-md '>
        <Table borderAxis={"none"} size='md' sx={{ 
            '& tr > *:last-child': { textAlign: 'right' },
            '& tr > *:first-of-type': { textAlign: 'left' },

        }}>
        <thead>
            <tr>
                <th style={{ }}>Outubro</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item) => (
                <tr key={item.label}>
                    <td>
                        {item.label}
                    </td>
                    <td>
                        {formatCurrency(item.value).slice()} 
                    </td>
                
                </tr>
            ))}
        
        </tbody>
      </Table>
    </div>
  )
}
