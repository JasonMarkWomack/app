import React from 'react';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import reportWebVitals from './reportWebVitals';



const history = createBrowserHistory();

Sentry.init({
  dsn: "https://0b74a039ccc34df6aae1bc376d92daa6@o1402538.ingest.sentry.io/6734706",

  integrations: [
    new BrowserTracing({
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],

       
      routingInstrumentation: Sentry.reactRouterV5Instrumentation(history),

 
    }),
  ],
 
  tracesSampleRate: 1.0,
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
