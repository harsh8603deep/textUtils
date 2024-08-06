import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// let name ="Harsh";
function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enable or not
  const [alert, setAlert] = useState(null);  //alert is null

  //here alert is an object
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })

    // dissmisses alert message after some time(1.5 seconds)
    setTimeout(()=> {
      setAlert(null);
    }, 1500);
  }
  // removes body classes(colors)
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  // jsx(html only)
  const toggleMode = (cls)=>{
    removeBodyClasses();
    // changes the color of the background
    document.body.classList.add('bg-'+cls)
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
{/* <Navbar title = "TextUtils" aboutText="About Us"/>        */}
{/* <Navbar/>   */}
<Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/> 
<Alert alert={alert}/>
{/* my-3 is used for margin(space) */}
<div className='container my-3'>
<TextForm  showAlert={showAlert} heading= "TextUtils - Word Counter Character Counter Remove extra spaces" mode={mode}/>
</div> 
</>
  );
}

export default App;
