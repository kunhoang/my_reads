import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Search from './Search';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/search',
        element: <Search />,
    },
])
function Home() {
    return <RouterProvider router={router} />;
}

export default Home
