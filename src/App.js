import { ToastContainer } from 'react-toastify';
import './App.css';
import Card from './components/main/Card';
import Navbar from './components/navbar/Navbar';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='mt-5'>
        <Card />
      </div>
      <ToastContainer autoClose={4000} draggable theme='dark' />
    </>
  );
}

export default App;