// import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Movies from './views/movies';
import People from './views/people';
import Main from './views/main';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>
    },
    {
      path: "/movies",
      element: <Movies />,
    },
    {
      path: "/people",
      element: <People/>
    }
  ]);

  return (
    <div>
      {/* <Header/> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
