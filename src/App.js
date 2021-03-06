import './App.css';
import {Routes, Route} from "react-router-dom";
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import RequiredAuth from './Pages/Login/RequiredAuth/RequiredAuth';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequiredAuth>
            <Checkout></Checkout>
          </RequiredAuth>
        }></Route>
        <Route path='/addservice' element={
          <RequiredAuth>
            <AddService></AddService>
          </RequiredAuth>
        }></Route>
        <Route path='/manage' element={
          <RequiredAuth>
            <ManageServices></ManageServices>
          </RequiredAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
