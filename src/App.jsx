//Styles
import './App.css'

//Components
import CharacterList from './components/CharacterList'
import NavBar from './components/NavBar'
import History from './components/History'

//React-Router-dom
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<CharacterList/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
    </div>
  )
}

export default App
