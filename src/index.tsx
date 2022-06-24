import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SWRConfig } from "swr";
import axios from 'axios';

// const fetcher = async (input:any, init:any) => {
//   const res = await fetch(input, init);
//   return res.json();
// };

const fetcher = (url:string, token:string) =>
    axios
      .get(url, { headers: { Authorization: "Bearer " + process.env.REACT_APP_PERSONAL_TOKEN } })
      .then((res) => res.data);


ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
