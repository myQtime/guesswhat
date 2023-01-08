// pages/_app.js
// import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'
// import GlobalContext from '../provider/GlobalProvider'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/all.css'

function MyApp({ Component, pageProps }) {
    const [melody, setMelody] = useState(null)
    const [BGM, setBGM] = useState(null)
    const [BS, setBS] = useState(null)
    const [DR, setDR] = useState(null)
    const [AlertSide, setAlertSide] = useState(false)
    const [AlertBread, setAlertBread] = useState(false)
    const [AlertDownload, setAlertDownload] = useState(false)

    const globalContextValue = {
        melody,
        setMelody,
        BGM,
        setBGM,
        BS,
        setBS,
        DR,
        setDR,
        AlertSide,
        setAlertSide,
        AlertBread,
        setAlertBread,
        AlertDownload,
        setAlertDownload,
    }
    return (
        // <ChakraProvider>
        // <GlobalContext.Provider value={globalContextValue}>
        <Component {...pageProps} />
        // </GlobalContext.Provider>
        // </ChakraProvider>
    )
}

export default MyApp
