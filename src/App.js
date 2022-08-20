import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {Routes, Route} from "react-router-dom";
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <div>
      {/* for using context hook */}
      <NoteState>

      <Navbar />
      <div className="conatainer">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contactus" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      </div>

      </NoteState>
    </div>
  );
}

export default App;
