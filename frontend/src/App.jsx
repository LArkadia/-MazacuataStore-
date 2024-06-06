import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>home</h1>}/>
      <Route path='/shopCart' element={<h1>shopCart</h1>}/>
      <Route path='/ticket' element={<h1>ticket</h1>}/>
      <Route path='/profile' element={<h1>profile</h1>}/>
    </Routes>
  )
}

export default App