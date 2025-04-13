
import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Technologies} from "./layout/sections/technologies/Technologies.tsx";
import {Experience} from "./layout/sections/experience/Experience.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {

  return (
    <>
      <Header/>
      <Main/>
      <Projects/>
      <Technologies/>
      <Experience/>
      <Footer/>
    </>
  )
}

export default App
