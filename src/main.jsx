import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/error/Error'
import Routs from './components/routs/Routs'
import About from './components/About'
import ListedBooks from './components/ListedBooks'
import PageToRead from './components/PageToRead'
import Blogs from './components/Blogs'






const router = createBrowserRouter([


  {
    path: '/',
    element: <Routs></Routs>,
    errorElement: <Error></Error>,

    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listed-book',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/page-to-read',
        element: <PageToRead></PageToRead>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/about',
        element: <About></About>
      },
    ]
  }
]

)

createRoot(document.getElementById('root')).render(
<RouterProvider router={router}></RouterProvider>
)
