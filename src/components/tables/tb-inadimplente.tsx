import { Table } from '@mui/joy'
import { formatCurrency } from '../../utils/format-currency'


type data = {
    label: string
    value: number
}

type props = {
    data: data[]
}

export default function TableInadimplente({data}:props) {
  return (
    <div className='bg-white rounded-md '>
        <Table borderAxis={"none"} size='lg' sx={{ 
            '& tr > *:last-child': { textAlign: 'right' },
            '& tr > *:first-child': { textAlign: 'left' },

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
                        {formatCurrency(item.value)} 
                    </td>
                
                </tr>
            ))}
        
        </tbody>
      </Table>
    </div>
  )
}
