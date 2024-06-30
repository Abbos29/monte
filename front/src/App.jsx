import './Reset.scss'
import './App.scss'
import Header from './components/layout/Header/Header'
import Wrap from './components/layout/Wrap/Wrap'
import Portfolio from './components/layout/Portfolio/Portfolio'
import Discover from './components/layout/Discover/Discover'
import Partners from './components/layout/Partners/Partners'
import Faq from './components/layout/Faq/Faq'

const App = () => {
  return (
    <>
      <Header />
      <Wrap />
      <Portfolio />
      {/* <Discover /> */}
      <Partners />
      <Faq />
    </>
  )
}

export default App