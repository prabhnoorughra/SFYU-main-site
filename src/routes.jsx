import App from "./App";
import ErrorPage from "./components/ErrorPage"
import HomePage from "./components/HomePage";
import ApplyPage from "./components/ApplyPage";
import ContactsPage from "./components/ContactsPage";
import TeamPage from "./components/TeamPage";
import EventsPage from "./components/EventsPage";





const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {index: true,           element: <HomePage />},
            {path: "apply",         element: <ApplyPage />},
            {path: "contacts",      element: <ContactsPage />},
            {path: "team",          element: <TeamPage />},
            {path: "events",        element: <EventsPage />},
        ],
    },
    {
        path: "*", 
        element: <ErrorPage />,
    },
];

export default routes