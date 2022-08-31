import React, {useState} from 'react'
import {Burger, Grid, Header, Image, MediaQuery, Navbar, Text} from "@mantine/core";

export const AppHeader = ({opened, setOpened}) => {
    return (
        <Header height={60} p="sm" sx={{
            boxShadow: '0 2px 2px 0 rgba(60, 75, 100, .14), 0 3px 1px -2px rgba(60, 75, 100, .12), 0 1px 5px 0 rgba(60, 75, 100, .20)',
        }}>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="sm"
                        mr="xl"
                    />
                </MediaQuery>
                <Grid>
                    <Grid.Col>
                        <Image
                            height={42}
                            src="/logo.svg"
                            withPlaceholder
                        />
                    </Grid.Col>
                </Grid>

            </div>
        </Header>
    )
}
