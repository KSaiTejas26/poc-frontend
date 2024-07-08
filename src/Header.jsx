import React from 'react';
import logo from './RealPage_Light.png'
const Navbar = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#EE7755',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <img src={logo} alt="Logo" style={{ height: '60px', marginRight: '20px' }} />
      <div style={{ display: 'flex', flexGrow: 1 }}>
        {/* <a href="#home" style={{ color: 'white', padding: '14px 20px', textDecoration: 'none' }}>Home</a>
        <a href="#services" style={{ color: 'white', padding: '14px 20px', textDecoration: 'none' }}>Services</a>
        <a href="#about" style={{ color: 'white', padding: '14px 20px', textDecoration: 'none' }}>About</a>
        <a href="#contact" style={{ color: 'white', padding: '14px 20px', textDecoration: 'none' }}>Contact</a> */}
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '80px', padding: '0px' }}>
        <h1 style={{fontSize:'30px',textAlign:'center'}}>SRE Metrics</h1>
    
      </div>
    </div>
  );
}

export default App;
