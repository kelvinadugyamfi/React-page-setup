import {Routes, Route, BrowserRouter} from 'react-router-dom'
import NavBar from './components/navBar';
import Header from './components/header';
import Footer from './components/footer';
import Index from './pages';

function Master(){
    return (
        <BrowserRouter>
        <NavBar/>
        <Header/>
            <Routes>
            <Route path='/' Component={Index} />

            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default Master; 