import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './Pages/ErrorPage.jsx';
import Root from './layout/Root.jsx';
import Home from './Pages/Home.jsx';
import SignUp from './Pages/SignUp.jsx';
import SignIn from './Pages/SignIn.jsx';
import AddTouristSpot from './Pages/AddTouristSpot.jsx';
import AllSpotList from './Pages/AllSpotList.jsx';
import MyList from './Pages/MyList.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import UpdateAdd from './Pages/UpdateAdd.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: 'addTouristSpot',
        element: <AddTouristSpot></AddTouristSpot>
      },
      {
        path: 'updateTour',
        element: <UpdateAdd></UpdateAdd>
      },
      {
        path: 'touristSpot',
        element:<AllSpotList></AllSpotList>
      },
      {
        path: 'myList',
        element: <MyList></MyList>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
