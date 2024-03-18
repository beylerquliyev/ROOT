import { Film } from "./Fim";
import { GitHub } from "./GitHub";
import {BrowserRouter,Routes,Route, } from "react-router-dom"
import { Nav } from "./Nav";
import { NotFound } from "./NotFound"; 
import { Slider } from "./Slider";
function App() {
 




  return (
    <div className="App">

      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/" element={<GitHub/>}   />
      <Route path="/Film" element={<Film/>} />
      <Route path="/Slider" element={<Slider/>}/>
      <Route path="*" element={<NotFound/>}/>

      </Routes>


      </BrowserRouter>

      
     
      

  





    </div>
  );
}

export default App;
