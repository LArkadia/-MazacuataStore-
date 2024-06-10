import {Routes, Route, createRoutesFromElements, createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BookFormPage from "./pages/BookFormPage";
import BookPage from "./pages/BookPage";
import ProfilePage from './pages/ProfilePage';
import ShopCartPage from "./pages/ShopCartPage";
import TicketPage from "./pages/TicketPage";
<<<<<<< HEAD
import { MianContent } from './components/MianContent';
=======
import NotFound from './pages/NotFound';
>>>>>>> eac2d81cd28a8e7409a1651a6c128c727b53cd92

const routes=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MianContent/>} >
      <Route index element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/adminCrud' element={<BookFormPage/>}/>
      <Route path='/books' element={<BookPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/cart' element={<ShopCartPage/>}/>
      <Route path='/ticket' element={<TicketPage/>}/>
<<<<<<< HEAD
    </Route>
=======
      <Route path="*" element={<NotFound/>}/>
    </Routes>
>>>>>>> eac2d81cd28a8e7409a1651a6c128c727b53cd92
  )
);
function App() {
  return <RouterProvider router={routes}/>;
}

export default App