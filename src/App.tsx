import { useState } from 'react'
import { Home } from './pages/Home/Home'
import { Header } from './shared/Header/Header'
import Popup from './shared/Popup/Popup'

function App() {

  const [selectCity, setSelectCity] = useState<string>('Москва')

  return (
    <div className='global__container'>
      {/* <Popup />  */}
      <div className="container">
        <Header selectCity={selectCity} setSelectCity={setSelectCity} />
        <Home selectCity={selectCity} />
      </div>
    </div>
  )
}

export default App
