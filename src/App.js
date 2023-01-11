//import logo from './logo.svg';
import './App.css';
import Header from './component/header/header.component';
import Footer from './component/footer/footer.component';
import Nav from './component/nav/nav.component';
import Experience from './component/experience/experience.component';
import Service from './component/services/services.component';
import About from './component/about/about.component'
import Portfolio from './component/portfolio/portfolio.component'
import Contact from './component/contact/contact.component'


function App() {
  return (
    <div>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Service/>
    <Portfolio/>

    
    <Contact/>
    <Footer/>

    </div>
  );
}

export default App;
