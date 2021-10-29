import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import Home from './components/Home/Home';
import AuthProvider from './components/Hooks/AuthProvider';
import Login from './components/Login/Login';
import ManageOrder from './components/ManageOrder/ManageOrder';
import MyOrder from './components/MyOrder/MyOrder';
import Navigation from './components/Navigation/Navigation';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
    <Navigation></Navigation>
      <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route  path="/home">
        <Home></Home>
      </Route>
      <Route  path="/login">
       <Login></Login>
      </Route>
      <PrivateRoute  path="/placeOrder">
        <PlaceOrder></PlaceOrder>
      </PrivateRoute>
      <PrivateRoute  path="/addService">
        <AddService></AddService>
      </PrivateRoute>
      <PrivateRoute  path="/myOrder">
        <MyOrder></MyOrder>
      </PrivateRoute>
      <PrivateRoute  path="/manageOrder">
        <ManageOrder></ManageOrder>
      </PrivateRoute>
      </Switch>
    </Router>
    </AuthProvider>
     
    </div>
  );
}

export default App;
