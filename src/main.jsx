
import { createRoot } from 'react-dom/client'
import  { Toaster } from 'react-hot-toast';
import './index.css'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/error/Error'
import Routs from './components/routs/Routs'
import About from './components/About'
import ListedBooks from './components/ListedBooks'
import PageToRead from './components/PageToRead'
import Book from './components/Book'
import ReadBooks from './components/ReadBooks'
import Wishlist from './components/Wishlist'








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
        path: '/books/:bookId',
        element: <Book></Book>,
        loader: ()=> fetch('/books.json'),
      },
    
      {
        path: '/read',
        element: <ReadBooks></ReadBooks>,
      },
      {
        path: '/wishlist-books',
        element: <Wishlist></Wishlist>
      },
      {
        path: '/page-to-read',
        element: <PageToRead></PageToRead>
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
<>
<RouterProvider router={router}></RouterProvider>,
<Toaster position='top-right'></Toaster>
</>
)
