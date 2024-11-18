
import './App.css'
import { Carteira } from './sections/carteira'
import { Header } from './sections/header'
import { VisaoGeral } from './sections/visao-geral'

function App() {


  return (

    <div className='w-full'>
      <Header />
      <div className='px-[3%]'>

        <VisaoGeral />
        <Carteira />

      </div>

    </div>
  
  )
}

export default App
