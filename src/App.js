import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Service from './Components/Service/Service';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Home/ContactForm/Contact';
import Login from './Components/Login/Login';


function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path='/' element={<Home></Home>} />


                    <Route path='/home' element={<Home></Home>} />

                    <Route path='/service' element={<Service></Service>} />

                    <Route path='/about' element={<About></About>} />

                    <Route path='/contact' element={<Contact></Contact>} />


                    <Route path='/login' element={<Login></Login>} />






                    <Route path='*' element={<NotFound></NotFound>} />
                </Routes>
                <Footer></Footer>
            </BrowserRouter>


        </div>
    );
}

export default App;