
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Stratagy from './components/Stratagy/Stratagy';


function App() {
  return (
    <div className="App">
    
    <Router>
     <Header></Header>
      <Switch>
          <Route exact path ="/">
             <Home></Home> 
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/strategy">
            <Stratagy></Stratagy>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
      </Switch>
      <Footer></Footer>
    </Router>
     
    </div>
  );
}

export default App;
