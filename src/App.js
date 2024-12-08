import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { routs } from './routs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter(routs);
  return (
    <RouterProvider router={router} />
  );
}

export default App;