import { createBrowserRouter } from "react-router";
import App from "../app/app";
import Layout from "../app/layout";

const router = createBrowserRouter([
    {
        path: "",
        Component:Layout,
        children:[
            {path:"",Component:App}
        ]
    }
])


export default router