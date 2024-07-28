import GameSetup from './GameSetup';
import GamePlay from './GamePlay';
import GameScore from './GameScore';
import Header from './Header'
import Footer from './Footer'
import './App.css'

function App() {

  return (
    <>
    <Header />
    <h1 className='p2lAnagram'>Anagram Hunt</h1>
    <GameSetup />
    <GamePlay />
    <GameScore />
    <Footer />
    </>
  )
}

export default App
