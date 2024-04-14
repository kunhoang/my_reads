import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
])
function Home() {
    return <RouterProvider router={router} />;
}

export default Home
