import './App.scss';
import TopBar from "./components/topbar/TopBar"
import Menu from "./components/menu/Menu"
import Intro from "./components/intro/Intro"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import {useState} from 'react'

function App() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="app">
            <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

export default App;
