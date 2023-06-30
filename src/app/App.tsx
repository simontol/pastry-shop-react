import 'bootstrap-icons/font/bootstrap-icons.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import ProductForm from './components/ProductForm';
import ProductsList from './components/ProductsList';
import './scss/index.scss';
import PageWrapper from './components/PageWrapper';
import ProductDetails from './components/ProductDetails';
import ErrorPage from './components/ErrorPage';
import StatsGraph from './components/StatsGraph';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <ProductsList />,
      },
      {
        path: '/statistics',
        element: <StatsGraph />,
      },
      {
        path: '/products/new',
        element: <ProductForm />,
      },
      {
        path: '/products/:id',
        element: <ProductDetails />,
      },
    ],
  },
]);

const App = () => (
  <RouterProvider router={ router } />
);

export default App;
