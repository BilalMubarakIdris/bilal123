import './App.css';
import Navbar from './components/Navbar'
import Theme from './components/Theme'
import Home from './components/Home'
import About from './components/About';
import ProjectsList from './components/ProjectsList'
import Skills from './components/Skills'
import Footer from './components/Footer'
import SocialMedia from './components/SocialMedia'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Theme />
      <Home />
      <SocialMedia />
      <About />
      <ProjectsList />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
