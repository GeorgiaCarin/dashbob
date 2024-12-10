
import Table from '@mui/joy/Table';


type dataset = {
  name: string,
  month: number,
  total: number
}

type props = {
  data: dataset[]
}

export const TableRedeInativa = ({data}:props) => {
  return (
    <div>
      <Table borderAxis={"none"} sx={{ 
       
        // '& tr > *:last-child': { textAlign: 'left' },
        // '& tr > *:first-child': { textAlign: 'left' },
        // '& tr > *:not(:first-child):not(:last-child)': { textAlign: 'center' },
        
        
         }} >
        <thead>
            <tr>
                <th style={{ width: '48%' }}>Tipo de Distrato</th>
                <th >Mês Atual</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.name}>
                <td>{item.name}</td>
                <td>
                    {item.month} 
                </td>
                <td>
                    {item.total} 
                </td>
            
            </tr>
          ))}
        
        </tbody>
      </Table>
    </div>
  );
}

