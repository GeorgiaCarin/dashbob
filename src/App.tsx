
import './App.css'
import { Header } from './sections/header'
import { Receita } from './sections/receita'

function App() {


  return (

    <div className='w-full'>
      <Header />
      <div className='px-[2%]'>
        <Receita />
      </div>

    </div>
  
  )
}

export default App
