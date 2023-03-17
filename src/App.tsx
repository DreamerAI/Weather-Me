import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics'
import { Header } from './shared/Header/Header'
import Popup from './shared/Popup/Popup'

function App() {

  const [selectCity, setSelectCity] = useState<string>('Москва')

  return (
    <div className='global__container'>
      {/* <Popup />  */}
      <div className="container">
        <Header selectCity={selectCity} setSelectCity={setSelectCity} />
        <Routes>
          <Route path='/' element={<Home selectCity={selectCity} />} />
          <Route path='/month-statistics' element={<MonthStatistics />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
