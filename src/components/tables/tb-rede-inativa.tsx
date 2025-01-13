
import Table from '@mui/joy/Table';
import Loading from '../loading';

type TipoDistrato = {
  tipo: string;
  distratos: number;
  total: number;
};

type props = {
  data: TipoDistrato[]
}

export const TableRedeInativa = ({data}:props) => {
  if (!data || data.length === 0) {
    return <Loading />
  }
  return (
    <div className='bg-white rounded-xl py-1 shadow-sm h-full '>
      <Table borderAxis={"none"} size='lg' sx={{ 
       
        '& tr > *:last-child': { textAlign: 'right' },
        '& tr > *:first-child': { textAlign: 'left' },
        '& tr > *:not(:first-child):not(:last-child)': { textAlign: 'center' },
        fontSize: {
          xs: '14px',
          sm:'14px',
          md: '16px',
        }
        
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
            <tr key={item.tipo}>
                <td>{item.tipo}</td>
                <td>
                    {item.distratos} 
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

