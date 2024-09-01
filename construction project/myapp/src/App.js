import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Showdata from './Pages/Showdata';
import Edit from './Pages/Edit';
import Team from './Pages/Team';
import Testimonial from './Pages/Testimonial';
import Blog from './Pages/Blog';
import Detail from './Pages/Detail';
import Architecture from './Pages/Architecture';


function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/About' element={<About></About>}></Route>
       <Route path='/Service' element={<Service></Service>}></Route>
       <Route path='/Contact' element={<Contact></Contact>}></Route>
       <Route path='/Project' element={<Project></Project>}></Route>
       <Route path='/Team' element={<Team></Team>}></Route>
       <Route path='/Testimonial' element={<Testimonial></Testimonial>}></Route>
       <Route path='/Blog' element={<Blog></Blog>}></Route>
       <Route path='/Detail' element={<Detail></Detail>}></Route>
       <Route path='/Edit/:ids' element={<Edit></Edit>}></Route>
       <Route path='/Showdata' element={<Showdata></Showdata>}></Route>
       <Route path='/Architecture/:ids' element={<Architecture></Architecture>}></Route>
       {/* <Route path='/EditArchitecture/:ids' element={<EditArchitecture></EditArchitecture>}></Route> */}
       

      

      </Routes>
    </BrowserRouter>
  );
}

   

export default App;

// import { BrowserRouter, Route,  Routes } from 'react-router-dom';
// import About from './Pages/About';
// import Service from './Pages/Service';
// import Room from './Pages/Room';
// import Contact from './Pages/Contact';

// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Home></Home>}></Route>
//       <Route path='/About' element={<About></About>}></Route>
//       <Route path='/Service' element={<Service></Service>}></Route>
//       <Route path='/Room' element={<Room></Room>}></Route>
//       <Route path='/Contact' element={<Contact></Contact>}></Route>
//     </Routes>
//     </BrowserRouter>
//   );
// }
