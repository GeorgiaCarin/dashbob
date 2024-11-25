
import Table from '@mui/joy/Table';
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
    totalValue: data.reduce((sum, item) => sum + item.value, 0)
  }
  return (
    <div>
      <Table borderAxis={"x"} >
        <thead>
          <tr>
            <th style={{ width: '30%' }}>Situação</th>
            <th style={{ width: '30%' }}>Qtde</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.label}>
              <td>{row.label}</td>
              <td>{row.qtd}</td>
              <td>R$ {row.value}</td>
            
            </tr>
          ))}
          <tr className='text-md font-semibold'>
            <td>Total</td>
            <td>{total.totalQtd}</td>
            <td>R$ {total.totalValue}</td>
          </tr>
          <tr className='text-md font-semibold'>
            <td>Tkt médio</td>
            <td></td>
            <td>R$ {(total.totalValue/total.totalQtd).toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

