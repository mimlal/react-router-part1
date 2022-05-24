import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Post from "./components/pages/Post"
import Dashboard from "./components/pages/Dashboard"
import Home from './components/pages/home';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';
import Navbar from './components/Navbar';
function App() {
  let isLogged = true
  let data ={
    'st':'user not logged in'
  }
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/post/:category" element={<Post/>}/>
       <Route path="/post/:category/:id" element={<Post/>}/>
       <Route path="/dashboard" element={isLogged ?  <Dashboard/>: <Navigate to="/login" replace state={data}/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/logout" element={<Logout/>}/>
       <Route path="*" element={<h1>Error 404 page not found</h1>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
