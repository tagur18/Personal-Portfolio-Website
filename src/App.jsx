
import React from 'react'
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom'

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home";
import  Skills from "./pages/Skills";
import About from "./pages/About";
import  Connect  from "./pages/Connect";
import Work from "./pages/Work"
const App = ()=> {
  return (
    <Router>
      <Navbar/>
     

     <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/skills' element={<Skills/>}/>
          <Route path='/work' element={<Work/>}/>
           <Route path='/about' element={<About/>}/>
            <Route path='/connect' element={<Connect/>}/>
     </Routes>
     
     <Footer/>
    </Router>
  )
}

export default App

// //new

// import React from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import Skills from "./pages/Skills";
// import About from "./pages/About";
// import Connect from "./pages/Connect";
// import Work from "./pages/Work";

// const App = () => {
//   return (
//     <>
//       {/* Navbar (NO CHANGE) */}
//       <Navbar />

//       {/* MAIN SCROLLABLE PAGE */}
//       <div>

//         {/* HOME */}
//         <div id="home">
//           <Home />
//         </div>

//         {/* SKILLS */}
//         <div id="skills">
//           <Skills />
//         </div>

//         {/* WORK */}
//         <div id="work">
//           <Work />
//         </div>

//         {/* ABOUT */}
//         <div id="about">
//           <About />
//         </div>

//         {/* CONNECT */}
//         <div id="connect">
//           <Connect />
//         </div>

//       </div>

//       {/* FOOTER */}
//       <Footer />
//     </>
//   );
// };

// export default App;


//new2
// import React from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import Skills from "./pages/Skills";
// import About from "./pages/About";
// import Connect from "./pages/Connect";
// import Work from "./pages/Work";

// const App = () => {
//   return (
//     <>
//       {/* NAVBAR */}
//       <Navbar />

//       {/* MAIN CONTENT */}
//       <div className="pt-[140px] md:pt-[100px]">

//         {/* HOME */}
//         <section id="home">
//           <Home />
//         </section>

//         {/* SKILLS */}
//         <section id="skills">
//           <Skills />
//         </section>

//         {/* WORK */}
//         <section id="work">
//           <Work />
//         </section>

//         {/* ABOUT */}
//         <section id="about">
//           <About />
//         </section>

//         {/* CONNECT */}
//         <section id="connect">
//           <Connect />
//         </section>

//       </div>

//       {/* FOOTER */}
//       <Footer />
//     </>
//   );
// };

// export default App;