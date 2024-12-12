
import './App.css'
import { Carteira } from './sections/carteira'
import Expansao from './sections/expansao'
import Footer from './sections/footer'
import { Header } from './sections/header'
import Inadimplente from './sections/inadimplencia'
import { Receita } from './sections/receita'
import { RedeAtiva } from './sections/rede-ativa'
import RedeInativa from './sections/rede-inativa'
import { VisaoGeral } from './sections/visao-geral'

function App() {


  return (

    <div className='w-full'>
      <Header />
      <div className='flex flex-col px-[3%] laptop:px-[10%] gap-6'>
        <Receita />
        <RedeAtiva />
        <Expansao />
        <VisaoGeral />
        <RedeInativa />
        <Inadimplente />
        <Carteira />

      </div>
      <Footer />

    </div>
  
  )
}

export default App
