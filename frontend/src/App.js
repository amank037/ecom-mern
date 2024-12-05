import './design/App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


//components
import Home from './components/home/Home.jsx';
import NotFound from './components/commons/NotFound.jsx';
import NavBar from './components/commons/Navbar.jsx';
import Footer from './components/commons/Footer.jsx';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';


//css
import './design/App.css';
import './design/footer.css';
import './design/index.css';
import './design/nav.css';
import './design/notFound.css';
import './design/contact.css';
import './design/Products.css';
import './design/Orders.css';
import Orders from './components/orders/Orders';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/orders',
    element: <Orders />
  },
  {
    path: '/admin/orders',
    element: <Orders isAdmin={true} />
  }
]);

function App() {
  return (
    <div>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
