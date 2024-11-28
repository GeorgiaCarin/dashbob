
import './App.css'
import { Carteira } from './sections/carteira'
import { Header } from './sections/header'
import { Receita } from './sections/receita'
import { RedeAtiva } from './sections/rede-ativa'
import { VisaoGeral } from './sections/visao-geral'

function App() {


  return (

    <div className='w-full'>
      <Header />
      <div className='flex flex-col px-[3%] gap-6'>
        <Receita />
        <RedeAtiva />
        <VisaoGeral />
        <Carteira />

      </div>

    </div>
  
  )
}

export default App
