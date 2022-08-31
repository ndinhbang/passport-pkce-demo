import React from 'react';
// import '../css/App.css'
import { Text } from '@mantine/core';
import { Link } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <div>
            <h1>Bookkeeper</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link>
            </nav>
        </div>
    )
}

export default DefaultLayout
