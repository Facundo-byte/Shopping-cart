import { createBrowserRouter } from "react-router";
import {App} from "./components/App"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    }
])