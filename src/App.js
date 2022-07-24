import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Userlist from './pages/userlist/Userlist';
import User from './pages/user/User';
import Newuser from './pages/newuser/Newuser';
import Productlist from './pages/productlist/Productlist';
import Product from './pages/product/Product';


const App = () => {
  return (
    // router defined
    <Router>
<Topbar />
<div className="container">
  <Sidebar />
  {/* link is required in new router element to give the path */}
  <Link to='/' /> <br />
  <Link to='/users' /> <br />
  {/* Routes are the parent elements of route */}
<Routes>
<Route exact path="/" element={<Home/>} />
<Route exact path="/users" element={<Userlist/>} />
<Route exact path="/user/:userId" element={<User/>} />
<Route exact path="/newuser" element={<Newuser/>} />
<Route exact path="/products" element={<Productlist/>} />

<Route exact path="/product/:productsId" element={<Product/>} />

</Routes>
</div>
    </Router>
  )
}

export default App



/* <BrowserRouter>

<Link to='/'>Home</Link> <br />
<Link to='/About'>About</Link>


<Routes>
<Route exact path="/" element={<Home/>} />
<Route path="/About" element={<About/>} />

</Routes>

</BrowserRouter> */