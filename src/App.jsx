import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import ProfileTabs from './components/ProfileTabs'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />
      <main>
        <HomePage />
        <About />
        <Skills />
        <Projects />
        <ProfileTabs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
