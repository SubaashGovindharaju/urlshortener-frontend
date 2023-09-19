import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import People from './pages/user';
import Login from './pages/Login';
import Register from './pages/Register';
import EmailCheck from './pages/EmailCheck';
import PrivateRoute from './PrivateRoute';
import Reset from './pages/PasswordReast';
import Verify from './pages/Verify';
import Url from './pages/Url';
import URLTable from './pages/ListUrl';
import Registercheck from './pages/Registercheck';
// import DataTable from './pages/daily count';
import CheckUrl from './pages/CheckUrl';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index path="/" element={<PrivateRoute element={<People />} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/EmailCheck' element={<EmailCheck />} />
          <Route path='/Reset' element={<Reset />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/url' element={<PrivateRoute element={<Url />} />}/>
          <Route path='/table' element={<PrivateRoute element={<URLTable />} />}/>
          {/* <Route path='/datatable' element={<DataTable />} /> */}
          <Route path='/checkurl' element={<CheckUrl />} />
          <Route path='/twostep' element={<Registercheck />} />



        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;