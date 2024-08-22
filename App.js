import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

 // let name ="Harsh";
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);  //alert is null

 //here alert is an object
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })

      // dissmisses alert message after some time(1.5 seconds)
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  // // removes body classes(colors)
  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }

// jsx(html only)
// removeBodyClasses();
// changes the color of the background
// document.body.classList.add('bg-'+cls)
const toggleMode = ()=>{
if(mode === 'light'){
  setMode('dark')
  document.body.style.backgroundColor = '#042743';
  showAlert("Dark mode has been enabled", "success");
  // document.title = 'TextUtils - Dark Mode';
}
else{
  setMode('light')
  document.body.style.backgroundColor = 'white';
  showAlert("Light mode has been enabled", "success");
  // document.title = 'TextUtils - Light Mode';
}
}


  return (
    
    // fragment jsx
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about" element = { <About mode={mode} />}></Route>
          <Route exact path="/" element = {<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}></Route>
    </Routes>
    </div>
    </Router>
    </> 
  );
}

export default App;
