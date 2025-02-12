import { createBrowserRouter } from "react-router-dom" 
import Home from "./Pages/Home"
import App from "../App";

const routes = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path:"/",
                element:<Home/>,
            },
        ],
    },
]);

export default routes;