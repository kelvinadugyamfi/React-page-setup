import {Routes, Route, BrowserRouter} from 'react-router-dom'
import NavBar from './components/navBar';
import Header from './components/header';
import Footer from './components/footer';
import Index from './pages';
import About from './pages/about';
import Contact from './pages/contact';

function Master(){
    return (
        <BrowserRouter>
        <NavBar/>
            <Routes>
            <Route path='/' Component={Index} />
            <Route path='/about' Component={About}/>
            {/* <Route path='/post' Component={Post}/> */}
            <Route path='/contact' Component={Contact}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default Master; 