import { registerSW } from 'virtual:pwa-register'

const intervalMS = 60 * 1000 // 1 minutes

const updateSW = registerSW({
    onRegistered(r) {
        r && setInterval(() => {
            r.update()
            console.log('updating ...')
        }, intervalMS)
    }
})
