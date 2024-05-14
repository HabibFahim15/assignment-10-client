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
import ViewDetails from './Pages/ViewDetails.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://assingment-10-server-seven.vercel.app/tourSpots/')
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
        element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>,
      },
      {
        path: '/touristSpot/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: () => fetch('https://assingment-10-server-seven.vercel.app/tourSpots/')
      },
      {
        path: 'updateTour/:id',
        element: <UpdateAdd></UpdateAdd>,
        loader: () => fetch('https://assingment-10-server-seven.vercel.app/tourSpots/')
      },
      {
        path: 'touristSpot',
        element: <AllSpotList></AllSpotList>,
        loader: () => fetch('https://assingment-10-server-seven.vercel.app/tourSpots')
      },
      {
        path: 'myList',
        element:<PrivateRoute> <MyList></MyList></PrivateRoute>
        
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
