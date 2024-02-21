
// import Navbar from './components/Navbar'
import Navbar from './components/Navbar'
import './styles/styles.scss'
import './App.css'
import Categories from './components/Categories/Categories'
import HeroCard from './components/HeroCard'
import PostCards from './components/PostCards'


function App() {

  return (
    <>
    <Navbar/> 
    <Categories/>
    <HeroCard/>
    <PostCards title="Popular Posts"/>
    </>
  )
}

export default App
