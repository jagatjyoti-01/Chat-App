import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import CheackEmail from "../pages/CheackEmail";
import CheackPassword from "../pages/CheackPassword";
import Home from "../pages/Home";
import MessagePage from "../components/MessagePage";
import App from "../App";


const router=createBrowserRouter([
    {
    path : "/",
    element : <App/>,
    children : [
        {
            path : "register",
            element : <Register/>
        },
        {
            path:"email",
            element:<CheackEmail/>
        },
        {
            path:"password",
            element:<CheackPassword/>
        },
        {
            path:"",
            element:<Home/>,
            children:[
                {
                    path:'userId',
                    element:<MessagePage/>
                }
            ]
        }
    ]
}

])

export default router