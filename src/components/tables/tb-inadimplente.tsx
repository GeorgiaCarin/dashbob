import { Table } from '@mui/joy'


type data = {
    name: string
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
                <tr key={item.name}>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.value} 
                    </td>
                
                </tr>
            ))}
        
        </tbody>
      </Table>
    </div>
  )
}
