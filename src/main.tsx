import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Tasks } from './components/Tasks/Tasks.tsx';
import { Contacts } from './components/Contacs/Contacts.tsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  },
  {
    path: '/:id',
    element: <Contacts/>
  },
  {
    path:'/:id/tasks',
    element: <Tasks/>
  }
  
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
