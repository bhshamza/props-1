import React from 'react';
import './App.css';
import Profile from './profile/Profile';
import image from './profile/oussama.jpg.jpeg';
function App() {
  
  const styleObject = { color:  'black' , textAlign:'center'}
  return (
   <div className = "header_color"> 
<div className="App" style={styleObject}>
  <h1 style={{Color: "lightblue" ,fontFamily: "Stencil Std, fantasy"}}>Welcome</h1>
     <Profile img source={image} width="900"
     FullName='Oussama  Soussou'
     bio='I am a 28 year old man passionate about web development  '
     profession='Full stack web developer'
     />
    </div>
    </div>
  );
}

export default App;
