import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import createMockServer from './utils/api/mock-setup';
import ErrorPage from './components/common/error-page';
import Root from './routes/root';

createMockServer().start();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/sign-in',
        element: <Root.SignIn />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
