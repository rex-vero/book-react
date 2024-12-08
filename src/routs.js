import AddCard from "./components/main/AddCard";
import Card from "./components/main/Card";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";

export const routs = [
    {
        path: '/', element: <MainLayout />, children: [
            { path: '/', element: <Card /> },
            { path: '/add', element: <AddCard /> }
        ]
    },
    { path: '*', element: <NotFound /> }
]