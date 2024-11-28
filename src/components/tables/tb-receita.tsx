
import Table from '@mui/joy/Table';
import TrendingUp from '@mui/icons-material/TrendingUp';

type dataset = {
  name: string,
  trn: number,
  faturamento: number
}

type props = {
  data: dataset[]
}

export const TableReceita = ({data}:props) => {
  return (
    <div>
      <Table borderAxis={"none"} sx={{ 
        '& tr > *:last-child': { textAlign: 'left' },
        '& tr > *:first-child': { textAlign: 'left' },
        '& tr > *:not(:first-child):not(:last-child)': { textAlign: 'center' },
        
        
         }} >
        <thead>
          <tr>
            <th style={{ width: '30%' }}>Outubro</th>
            <th style={{ width: '30%' }}>Trn</th>
            <th>Faturamento</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>
                <TrendingUp color='success' /> {item.trn} 
              </td>
              <td>
                <TrendingUp color='success' /> R$ {item.faturamento} 
              </td>
            
            </tr>
          ))}
        
        </tbody>
      </Table>
    </div>
  );
}

