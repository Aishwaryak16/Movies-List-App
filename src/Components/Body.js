import React, { useEffect } from 'react';
import SignIn from './SignIn'
import Browse from './Browse';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';



const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <SignIn/>
        },
        {
            path: '/browser',
            element: <Browse />
        },
        {
            path: '/signin',
            element: <SignIn />
        },
    ]);




  return (
    <>
    <RouterProvider router={appRouter} />
    </>
  )
}

export default Body
