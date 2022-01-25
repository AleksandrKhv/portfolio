import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Remote from './components/remote_work/Remote';
import Contacts from './components/сontacts/Contacts';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Remote/>
            <Contacts/>
        </div>
    );
}

export default App;
