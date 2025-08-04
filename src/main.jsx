import { render } from 'preact'
import './index.css'
import { App } from './app.jsx'
import UserContex from './Context/UserContex.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

render(  <UserContex>
          <App />
           <ToastContainer position="top-center" autoClose={2000} />
        </UserContex>
        

    , document.getElementById('app'))
