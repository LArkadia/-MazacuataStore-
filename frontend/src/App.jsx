import {Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BookFormPage from "./pages/BookFormPage";
import BookPage from "./pages/BookPage";
import ProfilePage from './pages/ProfilePage';
import ShopCartPage from "./pages/ShopCartPage";
import TicketPage from "./pages/TicketPage";
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/adminCrud' element={<BookFormPage/>}/>
      <Route path='/books' element={<BookPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/cart' element={<ShopCartPage/>}/>
      <Route path='/ticket' element={<TicketPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App