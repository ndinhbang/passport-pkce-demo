import React from 'react'
import {createRoot} from 'react-dom/client'
import {createEmotionCache, MantineProvider} from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { ModalsProvider } from '@mantine/modals'
import App from './App'
import '@/registerSW'
import { theme } from "@/admin/theme";

const root = createRoot(document.getElementById('root'))

const emotionCache = createEmotionCache({ key: 'r' });

// @see https://beta.reactjs.org/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
root.render(
    <React.StrictMode>
        <MantineProvider theme={theme} emotionCache={emotionCache} withGlobalStyles withNormalizeCSS withCSSVariables>
            <ModalsProvider>
                <NotificationsProvider position="top-center" limit={2}>
                    <App/>
                </NotificationsProvider>
            </ModalsProvider>
        </MantineProvider>
    </React.StrictMode>
)
