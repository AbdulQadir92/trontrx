"use client"
import { ThemeProvider } from "styled-components"
import { LightTheme } from "@/styles/themes/LightTheme"
import GlobalStyles from "@/styles/Global"
import { useState, useEffect } from "react"
import Loader from "./Loader"


const Main = ({ children }: { children: React.ReactNode }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // setTimeout(() => {
        //     setLoading(false)
        // }, 1000)
    }, [])

    return (
        <ThemeProvider theme={LightTheme}>
            <GlobalStyles />
            {loading ? <Loader /> :
                <>
                    {children}
                </>
            }
        </ThemeProvider>
    )
}

export default Main