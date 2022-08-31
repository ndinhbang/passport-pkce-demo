import React from 'react'
import {Navbar, Box, ScrollArea} from "@mantine/core";

export const AppNavbar = ({hidden}) => {
    return (
        <Navbar
            p="xs"
            hiddenBreakpoint="sm"
            hidden={hidden}
            width={{ sm: 200 }}
            sx={{
                backgroundColor: '#3c4b64',
                boxShadow: `rgba(0, 0, 0, 0.20) 2px 2px 3px`,
                borderRight: `1px solid #2b3b54`,
            }}
        >
            <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
                <Box py="md">

                </Box>
            </Navbar.Section>
        </Navbar>
    )
}
