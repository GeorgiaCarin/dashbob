import { Table } from '@mui/joy'
import React from 'react'

type inativos = {
    name: string
    pontos: number[]
}

type props = {
    data: inativos[]
}

export default function TableRedeInativa({data}:props) {
  return (
    <div className='bg-white shadow-md rounded-md'>
        <Table borderAxis={"none"} size='lg' sx={{ 
            '& tr > *:last-child': { textAlign: 'right' },
            '& tr > *:first-child': { textAlign: 'left' },

        }}>
        <thead>
            <tr>
                <th style={{ }}>Outubro</th>
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
