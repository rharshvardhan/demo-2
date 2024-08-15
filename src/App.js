import './App.css';
import Navbar from './components/tempNavbar';
import Acc from './components/Acc';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { useState } from 'react';
function App() {
  const [mode,setMode] = useState("light")
  const [alert, setAlert] = useState(null);


  const toggle = ()=>{
    if(mode === 'dark'){
      setMode('light');
       document.body.style.backgroundColor = 'white';
       showAlert("Light mode has been enabled","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'black';  
      showAlert("Dark mode has been enabled","success");
    }

  }

  
const showAlert = (message,type)=>{
  setAlert({
    msg: message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 2000);
}
  return (
     <>
     <Router>
     <Navbar title="New Navbar" homeName='About' mode={mode} toggle={toggle}/>
     <Alert alert={alert}/>
     <Routes>
    <Route path="/about" element={<Acc mode={mode} />} />
     <Route path="/TextArea" element={<TextArea showAlert={showAlert}  heading='Its a heading' mode={mode} />} />
       </Routes>
        </Router>
      </> 
    );
}

export default App;










