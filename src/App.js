import { Fragment } from 'react';
import './App.css';
import logo from './logo.svg';
import Home from './component/Home/Home';
import Nav from './component/Navs/Nav';
import Footer from './component/Footer/Footer';
import StafiCrud  from './component/StafiCrud';
import { BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import Header from './component/Home/Header';
import LoginForm  from './component/Login/LoginForm';
import Registration from './component/Login/Registration';
import StripeForm from './component/Payments/StripeForm';
import PaymentsPage from './component/Payments/PaymentsPage';
import Produktet from './component/Products/Produktet';



function App() {
  return (
    <>
    <Fragment>
           <Nav />
         
          
      <Routes>
           <Route exact path="/" Component={Home} />
           <Route exact path="/login" Component={LoginForm} />
           <Route exact path="/registration" Component={Registration} />
           <Route exact path="/Products/Produktet" Component={Produktet} />
           <Route exact path="/Payments/StripeForm" element={<StripeForm />} />
        <Route exact path="/PaymentsPage" element={<PaymentsPage />} />
      </Routes> 

      
       


    </Fragment>
   
  </>
  );
}

export default App;
