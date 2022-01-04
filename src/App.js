import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute'
import Footer from './Components/Footer/Footer';
import AllOrders from './Components/AllOrders/AllOrders';
import MyOrders from './Components/MyOrders/MyOrders';
import About from './Components/About/About';
import Contact from './Components/Home/ContactForm/Contact';
import Login from './Components/Login/Login'
import AuthProvider from './Context/AuthProvider';
import AddReview from './Components/AddReview/AddReview';
import NewOffer from './Components/NewOffer/NewOffer';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import MakeAdmin from './Components/ManageProducts/MakeAdmin/MakeAdmin'
import Services from './Components/Home/Products/Product/Service/Services';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import AdminRoute from './AdminRoute/AdminRoute'


function App() {
    return (
        <div className='App'>
            <AuthProvider>
                <BrowserRouter>
                    <Navbar></Navbar>
                    <Routes>
                        <Route path='/' element={<Home></Home>} />

                        <Route path='/home' element={<Home></Home>} />

                        <Route path='/services' element={<Services></Services>} />

                        <Route path='/services/:id'
                            element={<PrivateRoute><PlaceOrder /></PrivateRoute>}
                        />

                        <Route path='/myOrders' element={<AdminRoute><MyOrders /></AdminRoute>} />

                        <Route path='/allOrders' element={<AdminRoute><AllOrders /></AdminRoute>} />

                        <Route path='/makeAdmin' element={<AdminRoute><MakeAdmin /></AdminRoute>} />

                        <Route path='/allService' element={<ManageProducts></ManageProducts>} />

                        <Route path='/addProducts' element={<AdminRoute><NewOffer /></AdminRoute>} />

                        <Route path='/addReview' element={<PrivateRoute><AddReview /></PrivateRoute>} />

                        <Route path='/about' element={<About></About>} />

                        <Route path='/contact' element={<Contact></Contact>} />

                        <Route path='/signin' element={<Login></Login>} />

                        <Route path='*' element={<NotFound></NotFound>} />
                    </Routes>
                    <Footer></Footer>
                </BrowserRouter>
            </AuthProvider>

        </div>
    );
}

export default App;