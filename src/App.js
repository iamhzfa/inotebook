import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {Routes, Route} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Signup from './components/Signup';
import Login from './components/Login';
import Alert from './components/Alert';
import {useState} from "react";


function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      typ : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  return (
    <div>
      {/* for using context hook */}
      <NoteState>

      <Navbar />
      <Alert alert={alert} />
      <div className="conatainer">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contactus" element={<Contact />} />
        <Route exact path="/login" element={<Login showAlert={showAlert} />} />
        <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
        <Route path="*" element={<Home />} />
      </Routes>
      </div>

      </NoteState>
    </div>
  );
}

export default App;
