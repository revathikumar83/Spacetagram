import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ImageContainer from './components/PictureContainer';

const App = () => {
  
return ( 
  <div >
     <header> spacetagram </header>
     <main>
      <ImageContainer/>
      </main>    

  </div>
  );
};

export default App;