import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { ProductProvider } from './context/ProductContext';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>

    // <Container>
    //   <Layout />
    // </Container>
  );
};

export default App;

// 1. Layout
// 2. Routing
// 3. follow the best practices
// 4. use React bootstrap
// 5. useState
// 6. useEffect
// 7. Conditional Rendering
// 8. Services => api call
// 9. useContext
