import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/HomePage/home/Home'
import Login from '../pages/LoginPage/Login'
// import SignUp from '../pages/SignupPage/Signup'
import Signup from '../pages/SignupPage/Signup'
import SignUp from '../pages/SignupPage/Signup'
import RoomDetails from '../pages/RoomDetailsPage/RoomDetails'
import PrivateRoute from './PrivateRoute'
// import Main from '../layouts/Main'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {path: '/', element: <Home></Home>},
      {path: '/room/:id', element: <PrivateRoute><RoomDetails/></PrivateRoute>},
    ]
  },
  {path: '/login', element: <Login></Login>},
  {path: '/signup', element: <SignUp></SignUp>},
])