import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/HomePage/home/Home'
import Login from '../pages/LoginPage/Login'
import SignUp from '../pages/SignupPage/Signup'
// import Main from '../layouts/Main'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {path: '/', element: <Home></Home>}
    ]
  },
  {path: '/login', element: <Login></Login>},
  {path: '/signup', element: <SignUp></SignUp>},
])