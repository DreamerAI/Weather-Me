import { useState } from 'react'
import { Home } from './pages/Home/Home'
import { Header } from './shared/Header/Header'

function App() {

  const [selectCity, setSelectCity] = useState<string>('Москва')

  return (
    <div className='global__container'>
      <div className="container">
        <Header selectCity={selectCity} setSelectCity={setSelectCity} />
        <Home selectCity={selectCity} />
      </div>
    </div>
  )
}

export default App
