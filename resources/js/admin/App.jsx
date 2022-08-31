import React, { useMemo } from 'react';
// import '../css/App.css'
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import MasterLayout from "@/admin/Layouts/Master";
import Intro from "@/admin/Pages/Intro";
import AuthLayout from "@/admin/Layouts/Auth";
import NotFound from "@/admin/Pages/NotFound";
import ManageLayout from "@/admin/Layouts/Manage";
import routes from "@/admin/routes";
import SplashScreen from "@/admin/Components/App/SplashScreen";
import Callback from "@/admin/Pages/Auth/Callback";

const Login = React.lazy(() => import("@/admin/Pages/Auth/Login"));
const Register = React.lazy(() => import("@/admin/Pages/Auth/Register"));
const ForgotPassword = React.lazy(() => import("@/admin/Pages/Auth/ForgotPassword"));
const Dashboard = React.lazy(() => import("@/admin/Pages/Dashboard"));

const App = () => {

    const RouteItems = useMemo(() => {
        return routes.map(({path,name, element: Element, exact = false}) => {
            return (
                Element && (
                    <Route
                        key={path}
                        path={path}
                        exact={exact}
                        name={name}
                        element={<Element />}
                    />
                )
            )
        })
    }, [])

    return (
        <BrowserRouter>
            <React.Suspense fallback={ <SplashScreen /> }>
                <Routes>
                    <Route path="/admin" element={ <MasterLayout/> }>
                        <Route index element={ <Intro/> }/>
                        <Route path="auth/callback" element={ <Callback/> } />
                        <Route path="auth" element={ <AuthLayout/> }>
                            <Route path="login" element={ <Login/> }/>
                            <Route path="register" element={ <Register/> }/>
                            <Route path="forgot-password" element={ <ForgotPassword/> }/>
                        </Route>
                        <Route path="manage" element={ <ManageLayout/> }>
                            <Route path="dashboard" element={ <Dashboard/> }/>
                            {RouteItems}
                        </Route>
                        <Route path="*" element={ <NotFound/> }/>
                    </Route>
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    )
}

export default App
