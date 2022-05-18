
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './Component/AddTask/AddTask';
import Footer from './Component/Footer/Footer';
import Login from './Component/Login/Login/Login';
import NavBar from './Component/Navbar/Navbar';
import Register from './Component/Login/Register/Register'
import RequreAuth from './Component/Login/RequireAuth/RequireAuth'
function App() {
  return (
  <div>
    <NavBar></NavBar>

      <Routes>

      <Route path="/" element={
        <RequreAuth>
          <AddTask></AddTask>
        </RequreAuth>
      } ></Route>

      <Route path='login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>


      </Routes>

    <Footer></Footer>
  </div>
  );
}

export default App;
