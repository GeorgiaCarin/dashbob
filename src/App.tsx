
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

    <div className='w-full bg-[#f8f8f8]'>
      <Header />
      <div className='flex flex-col px-[3%] py-2  laptop:py-8 laptop:px-[10%] gap-6'>
        <Receita />
        <RedeAtiva />
        <div className='laptop:flex laptop:w-full laptop:gap-4'>
          <div className='laptop:w-2/3 '>
            <Expansao />
          </div>
          <div className='laptop:flex laptop:w-1/3 '>
            <VisaoGeral />

          </div>

        </div>
        <RedeInativa />
        <Inadimplente />
        <Carteira />

      </div>
      <Footer />

    </div>
  
  )
}

export default App
