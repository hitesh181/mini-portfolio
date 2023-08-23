import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";

//react-router-dom 5.1 version ke baad se saare route ko ek Routes parent ke andar daalna hota h so be careful of that
//BrowserRouter provides the actual functiaonlity of routing

//puri application ko maine browser route mein daaldiay to enable routing
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
           <App/>
    </BrowserRouter>
);
