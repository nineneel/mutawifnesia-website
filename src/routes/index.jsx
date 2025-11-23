import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Obligation from '../pages/Obligation';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'obligation',
        element: <Obligation />
      },
      {
        path: 'join',
        element: <Home />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

export default router;
