import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import NavBar from './Components/NavBar';
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

function App() {

  return (
    <>
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/colors" element={<Index />} />
          <Route path="/colors/new" element={<New />}/>
          <Route path="/colors/:index" element={<Show />} />
          <Route path="/colors/:index/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
    </Router>
    </>
  )
}

export default App
