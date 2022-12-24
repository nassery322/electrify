import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/Navbar/NavBar';
import Services from './Components/Services/Services';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Home />
      <Services /> 
      <Products /> 
      <About />
      <Contact /> 
    </div>
  );
}

export default App;
