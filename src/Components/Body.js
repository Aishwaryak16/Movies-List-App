import React from 'react'
import Header from './Header'
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
            path: '/broswer',
            element: <Browse />
        },
        {
            path: '/signin',
            element: <SignIn />
        },
    ]);


  return (
    <>
    <Header />
      <RouterProvider router={appRouter} />
    </>
  )
}

export default Body
