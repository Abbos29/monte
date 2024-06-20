import './Reset.scss'
import './App.scss'
import Header from './components/layout/Header/Header'
import Wrap from './components/layout/Wrap/Wrap'
import Portfolio from './components/layout/Portfolio/Portfolio'

const App = () => {
  return (
    <>
      <Header />
      <Wrap />
      <Portfolio />
    </>
  )
}

export default App