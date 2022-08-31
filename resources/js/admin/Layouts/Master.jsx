import React from 'react';
import { Outlet } from "react-router";

const MasterLayout = () => {
    return (
        <div className="master-layout">
            <Outlet />
        </div>
    )
}

export default MasterLayout
