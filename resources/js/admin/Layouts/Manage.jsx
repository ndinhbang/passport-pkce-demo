import React, {useEffect, useState} from 'react';
import { Outlet } from "react-router";
import {AppShell} from "@mantine/core";
import {AppNavbar} from "@/admin/Components/App/AppNavbar";
import {AppHeader} from "@/admin/Components/App/AppHeader";
import useApi from "@/admin/hooks/useApi";
import SplashScreen from "@/admin/Components/App/SplashScreen";
import {Navigate} from "react-router-dom";

const ManageLayout = () => {
    const [opened, setOpened] = useState(false);
    const [{data: userData, error, loading}, getUser] = useApi(`user-info`)

    if (userData) {
        sessionStorage.setItem('user-info', JSON.stringify(userData))
    }

    // useEffect(() => {
    //     if (userData) {
    //         console.log(userData);
    //     }
    // }, [userData]);

    if (loading) return <SplashScreen />
    if (error) return <Navigate to={`/admin`} state={{error: { message: 'Unauthorized' }}} />

    return (
        <AppShell
            className="manage-layout"
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            sx={{
                background: 'rgb(235, 237, 239)',
            }}
            navbar={
                <AppNavbar hidden={!opened}/>
            }
            header={
                <AppHeader opened={opened} setOpened={setOpened}/>
            }
        >
            <Outlet />
        </AppShell>
    )
}

export default ManageLayout
