
import Table from '@mui/joy/Table';
import { formatCurrency } from '../../utils/format-currency';
type dataset = {
  label: string,
  qtd: number,
  value: number
}

type props = {
  data: dataset[]
}

export const TableCarteira = ({data}:props) => {
  const total = {
    totalQtd: data.reduce((sum, item) => sum + item.qtd, 0),
    totalValue: data.reduce((sum, item) => sum + item.value, 0),
  }

  return (
    <div className=' pb-2'>
      <Table borderAxis={"none"} sx={{
        maxWidth: 440,
        backgroundColor: "#fff",
        '& tr:nth-of-type()': {
            backgroundColor: '#F4F9EC',
          },
          fontSize: {
            xs: '12px',
            sm:'14px',
            md: '16px',
          }
      }}>
        <thead>
          <tr>
            <th >Situação</th>
            <th style={{ width: '30%' }}>Qtde</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.label}>
              <td>{row.label}</td>
              <td>{row.qtd}</td>
              <td>{formatCurrency(row.value)}</td>
            
            </tr>
          ))}
          <tr className='text-md font-semibold '>
            <td>Total</td>
            <td>{total.totalQtd}</td>
            <td>{formatCurrency(total.totalValue)}</td>
          </tr>
          <tr className='text-md font-semibold'>
            <td>Tkt médio</td>
            <td></td>
            <td className=''>{(total.totalValue/total.totalQtd).toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

