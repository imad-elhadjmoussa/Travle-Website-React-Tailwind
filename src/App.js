import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { About } from "./Components/About/About";
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Service } from "./Components/Service/Service";
import { Contact } from "./Components/Contact/Contact";
import { AnimatePresence } from "framer-motion";


function App() {
  return (

    <div >

      <Router>
        <AnimatePresence mode="wait" >

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>

          <Footer />

        </AnimatePresence>
      </Router>

    </div>

  );
}

export default App;
