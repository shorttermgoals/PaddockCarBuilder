// import NavButton from "./components/NavButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Garage from './pages/Garage'
import Workshop from './pages/Workshop'
import NoPage from "./pages/NoPage";
import './styles/app.scss';

function App(){
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/garage" element={<Garage/>}/>
          <Route path="/workshop" element={<Workshop/>}/>
          <Route path="*" element={<NoPage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;