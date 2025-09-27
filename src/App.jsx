import About from './components/About';
import Header from './components/Header';
import Experiences from './components/Experiences';
import Tools from './components/Tools';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Header />
      <About />
      {/* <Tools /> */}
      <Experiences />
      <Projects />
    </div>
  );
}

export default App;
