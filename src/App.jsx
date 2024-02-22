
// import Navbar from './components/Navbar'
import Navbar from './components/Navbar'
import './styles/styles.scss'
import './App.css'
import Categories from './components/Categories/Categories'
import HeroCard from './components/HeroCard'
import PostCards from './components/PostCards'
import NewPosts from './components/NewPosts'


function App() {

  return (
    <>
    <Navbar/> 
    <Categories/>
    <HeroCard/>
    <PostCards title="Popular Posts"/>
    <NewPosts/>
    </>
  )
}

export default App
