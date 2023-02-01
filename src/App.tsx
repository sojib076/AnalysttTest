import React from 'react';

import './App.css';
import Home from './Components/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Details from './Components/Details/Details';

function App() {
  const route = createBrowserRouter([
    {
      path: '/', element: <Home />
    },
    {
      path: `/details/:id`,  
      loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(res=>res.json()),
      element: <Details />
    }
  ])
  return (
    <div className="">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
