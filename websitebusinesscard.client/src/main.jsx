import React from 'react';
import ReactDOM from 'react-dom/client';
/*import { BrowserRouter } from 'react-router-dom';*/
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import Layout from './components/fragments/Layout';
import MainPage from './components/pages/MainPage';
import PortfolioPage from './components/pages/PortfolioPage';


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/portfolio",
                element: <PortfolioPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <RouterProvider router={router} />
     </React.StrictMode>
);