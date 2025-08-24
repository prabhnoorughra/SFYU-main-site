import App from "./App";
import ErrorPage from "./components/ErrorPage"





const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [

        ],
    },
    {
        path: "*", 
        element: <ErrorPage />,
    },
];

export default routes