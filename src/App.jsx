import About from './components/About'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import ProfileTabs from './components/ProfileTabs'

function App() {
  return (
    <div className="bg-base-200 min-h-screen">
      <Navbar />
      <HomePage />
      <About />
      <ProfileTabs />
    </div>
  )
}

export default App
